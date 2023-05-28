# JPG to WebP Converter

This is a Node.js script that converts JPG files to WebP format using the sharp library. This project was inspired by my original Python script, found here: https://github.com/nickstanovic/convert-jpg-to-webp.

## Prerequisites

Before running this script, make sure you have the following installed:

- Node.js (version 10 or above)
- npm (Node Package Manager)

## Installation

1. Clone the repository or create a new directory for your project.
2. Navigate to the project directory.
3. Run the following command to initialize a new Node.js project:

```shell
npm init -y
```

4. Install the required dependencies by running the following command:

```shell
npm install sharp
```

## Usage

1. Open the file containing the code you provided (e.g., `converter.js`) in your preferred code editor.
2. Modify the `inputPath` and `outputPath` variables to specify the input directory containing the JPG files and the output directory where the converted WebP files will be saved, respectively.
3. Save the changes.

## Running the Script

To run the script and convert the JPG files to WebP format, follow these steps:

1. Open your terminal or command prompt.
2. Navigate to the project directory.
3. Run the following command:

```shell
node .\convert-webp.js
```

The script will read all the JPG files in the specified `inputPath` directory and convert them to WebP format using the `sharp` library. The converted files will be saved in the `outputPath` directory.

Please note that the script will create the output directory (if it doesn't exist) with the `recursive: true` option, ensuring that all directories in the path are created.

## Customization

- To adjust the quality of the converted images, modify the `quality` option in the `.webp()` function. Higher values result in better quality but larger file sizes.
- To enable lossless compression, change the `lossless` option to `true` in the `.webp()` function.
