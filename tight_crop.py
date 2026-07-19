from PIL import Image

def crop_transparent(image_path, output_path):
    img = Image.open(image_path)
    
    # Get the bounding box of non-zero regions in the image
    bbox = img.getbbox()
    
    if bbox:
        # Crop the image to the bounding box
        cropped_img = img.crop(bbox)
        
        # We also want to make it square if possible, padding it back slightly so it's not completely touching the edges, or just keep the tight crop? 
        # Actually a tight crop is fine. But for a favicon, it's best if it's square.
        width, height = cropped_img.size
        size = max(width, height)
        
        # Create a new square image with a transparent background
        new_img = Image.new('RGBA', (size, size), (0, 0, 0, 0))
        
        # Paste the cropped image in the center
        x = (size - width) // 2
        y = (size - height) // 2
        new_img.paste(cropped_img, (x, y))
        
        new_img.save(output_path)
        print(f"Cropped and squared image saved to {output_path}")
    else:
        print("Image is entirely transparent.")

crop_transparent('public/logo icon.png', 'public/logo icon.png')
