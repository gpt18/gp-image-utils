/**
 * Represents the properties for compressing an image.
 */
export type CompressImageProps = {
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
