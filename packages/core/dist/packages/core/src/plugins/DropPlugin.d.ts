import { Plugin } from '@tiptap/pm/state';
import { Slice } from '@tiptap/pm/model';
export declare const DropPlugin: (onDrop: (e: DragEvent, slice: Slice, moved: boolean) => void) => Plugin<any>;
