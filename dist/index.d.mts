/**
 * Represents the properties for compressing an image.
 */
interface CompressImageProps {
    /**
     * The file to be compressed.
     */
    file: File;
    /**
     * The maximum size of the compressed image in kilobytes (KB).
     */
    maxSizeKB: number;
    /**
     * Optional options for compressing the image.
     */
    options?: {
        /**
         * Specifies whether to crop the image during compression.
         */
        crop?: boolean;
    };
}

/**
 * Compresses an image file to reduce its size while maintaining its quality.
 *
 * @param file - The image file to be compressed.
 * @param maxSizeKB - The maximum size (in kilobytes) that the compressed image should be.
 * @param options - Additional options for image compression (e.g., cropping).
 * @returns A Promise that resolves to the compressed image file, or null if compression fails.
 *
 * @constant IMAGE_QUALITY_FACTOR - The quality factor of the image, used in compression. The value is 0.7.
 * @constant SIZE_REDUCTION_PERCENTAGE - The percentage by which the image size is reduced in each compression iteration. The value is 0.2.
 *
 * @author Guddu Prajapati (gpt18)
 * @license MIT
 * @version 0.0.1
 */

declare function compressImage(file: CompressImageProps['file'], maxSizeKB: CompressImageProps['maxSizeKB'], options?: {
    crop?: boolean;
}): Promise<File | null>;

export { type CompressImageProps, compressImage };
