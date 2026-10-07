from PIL import Image

src = r"C:\Users\tinej\Downloads\logo-senegal-hotels.png"
logo = Image.open(src).convert("RGBA")

# favicon.ico (multi-size)
logo.save(r"C:\Users\tinej\Documents\Projet par défaut\frontend\public\favicon.ico", format="ICO", sizes=[(16, 16), (32, 32), (48, 48)])

# PWA icons
logo.resize((192, 192), Image.LANCZOS).save(r"C:\Users\tinej\Documents\Projet par défaut\frontend\public\icons\icon-192.png")
logo.resize((512, 512), Image.LANCZOS).save(r"C:\Users\tinej\Documents\Projet par défaut\frontend\public\icons\icon-512.png")

# Header/welcome logo (keep original)
logo.save(r"C:\Users\tinej\Documents\Projet par défaut\frontend\public\images\logo-senegal-hotels.png")

# apple touch icon (add white background for iOS)
bg = Image.new("RGBA", (180, 180), (255, 255, 255, 255))
bg.paste(logo.resize((180, 180), Image.LANCZOS), (0, 0), logo.resize((180, 180), Image.LANCZOS))
bg.convert("RGB").save(r"C:\Users\tinej\Documents\Projet par défaut\frontend\public\apple-touch-icon.png")

print("ok")
