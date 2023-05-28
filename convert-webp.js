import fs from "fs"
import path from "path"
import sharp from "sharp"

const inputPath = "C:\\Users\\nicks\\Downloads\\"
const outputPath = "C:\\Users\\nicks\\Downloads\\webp\\"

// The `recursive: true` option makes sure all directories in the path get created, if they don't exist
if (!fs.existsSync(outputPath)) {
  fs.mkdirSync(outputPath, { recursive: true })
}

fs.readdirSync(inputPath).forEach(file => {
  if (path.extname(file) === ".jpg") {
    const filename = path.basename(file, ".jpg") + ".webp"
    // Use sharp to convert the image to webp format
    sharp(path.join(inputPath, file))
      .webp({ quality: 60, lossless: false })
      .toFile(path.join(outputPath, filename))
      .catch(err => console.error(err))
  }
})
