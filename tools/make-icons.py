"""
Generates icons/icon-192.png and icons/icon-512.png: the same flat Dad face as
icons/icon.svg, drawn with plain Python (no Pillow, no fonts) so anyone can
regenerate them.

    py tools/make-icons.py
"""
import os
import struct
import zlib

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

BG = (0xD6, 0x89, 0x10)
SKIN = (0xF1, 0xC2, 0x7D)
CAP = (0x2E, 0x4A, 0x7D)
BRIM = (0x24, 0x39, 0x5F)
DARK = (0x2B, 0x26, 0x20)
NOSE = (0xE0, 0xA8, 0x66)
STACHE = (0x5A, 0x3A, 0x1E)


def in_circle(x, y, cx, cy, r):
    return (x - cx) ** 2 + (y - cy) ** 2 <= r * r


def in_rrect(x, y, x0, y0, w, h, r):
    if x < x0 or x > x0 + w or y < y0 or y > y0 + h:
        return False
    cx = x0 + r if x < x0 + r else (x0 + w - r if x > x0 + w - r else x)
    cy = y0 + r if y < y0 + r else (y0 + h - r if y > y0 + h - r else y)
    return (x - cx) ** 2 + (y - cy) ** 2 <= r * r


def in_ellipse(x, y, cx, cy, rx, ry):
    return ((x - cx) / rx) ** 2 + ((y - cy) / ry) ** 2 <= 1


def near_segment(x, y, x1, y1, x2, y2, width):
    dx, dy = x2 - x1, y2 - y1
    length2 = dx * dx + dy * dy
    t = 0 if length2 == 0 else max(0, min(1, ((x - x1) * dx + (y - y1) * dy) / length2))
    px, py = x1 + t * dx, y1 + t * dy
    return (x - px) ** 2 + (y - py) ** 2 <= (width / 2) ** 2


def color_at(x, y):
    """Colour of the icon at a point in 512x512 space (full bleed, for maskable icons)."""
    c = BG
    face = in_circle(x, y, 256, 272, 150)
    if face:
        c = CAP if y < 212 else SKIN
    if in_rrect(x, y, 96, 196, 250, 26, 13):
        c = BRIM
    for lx in (150, 272):  # glasses: outer rounded rect minus inner one = outline
        if in_rrect(x, y, lx, 240, 90, 60, 16) and not in_rrect(x, y, lx + 10, 250, 70, 40, 8):
            c = DARK
    if near_segment(x, y, 240, 268, 272, 268, 10):
        c = DARK
    if near_segment(x, y, 150, 262, 114, 256, 10) or near_segment(x, y, 362, 262, 398, 256, 10):
        c = DARK
    if in_circle(x, y, 256, 316, 14):
        c = NOSE
    if in_ellipse(x, y, 222, 348, 46, 19) or in_ellipse(x, y, 290, 348, 46, 19):
        c = STACHE
    return c


def render(size, samples=2):
    scale = 512 / size
    rows = bytearray()
    for py in range(size):
        rows.append(0)  # PNG filter type: none
        for px in range(size):
            r = g = b = 0
            for sy in range(samples):
                for sx in range(samples):
                    cr, cg, cb = color_at((px + (sx + 0.5) / samples) * scale, (py + (sy + 0.5) / samples) * scale)
                    r += cr
                    g += cg
                    b += cb
            n = samples * samples
            rows += bytes((r // n, g // n, b // n, 255))
    return bytes(rows)


def png(size, raw):
    def chunk(tag, data):
        return struct.pack(">I", len(data)) + tag + data + struct.pack(">I", zlib.crc32(tag + data) & 0xFFFFFFFF)

    header = struct.pack(">IIBBBBB", size, size, 8, 6, 0, 0, 0)  # 8-bit RGBA
    return b"\x89PNG\r\n\x1a\n" + chunk(b"IHDR", header) + chunk(b"IDAT", zlib.compress(raw, 9)) + chunk(b"IEND", b"")


if __name__ == "__main__":
    for size in (192, 512):
        path = os.path.join(ROOT, "icons", f"icon-{size}.png")
        with open(path, "wb") as f:
            f.write(png(size, render(size)))
        print("wrote", path)
