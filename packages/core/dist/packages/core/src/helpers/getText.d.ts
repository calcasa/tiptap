import { Node as ProseMirrorNode } from '@tiptap/pm/model';
import { TextSerializer } from '../types.js';
/**
 * Gets the text of a Prosemirror node
 * @param node The Prosemirror node
 * @param options Options for the text serializer & block separator
 * @returns The text of the node
 * @example ```js
 * const text = getText(node, { blockSeparator: '\n' })
 * ```
 */
export declare function getText(node: ProseMirrorNode, options?: {
    blockSeparator?: string;
    textSerializers?: Record<string, TextSerializer>;
}): string;
