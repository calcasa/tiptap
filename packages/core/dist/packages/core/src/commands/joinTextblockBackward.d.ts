import { RawCommands } from '../types.js';
declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        joinTextblockBackward: {
            /**
             * A more limited form of joinBackward that only tries to join the current textblock to the one before it, if the cursor is at the start of a textblock.
             */
            joinTextblockBackward: () => ReturnType;
        };
    }
}
export declare const joinTextblockBackward: RawCommands['joinTextblockBackward'];
