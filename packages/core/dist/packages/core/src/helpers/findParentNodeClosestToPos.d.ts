import { Node as ProseMirrorNode, ResolvedPos } from '@tiptap/pm/model';
import { Predicate } from '../types.js';
/**
 * Finds the closest parent node to a resolved position that matches a predicate.
 * @param $pos The resolved position to search from
 * @param predicate The predicate to match
 * @returns The closest parent node to the resolved position that matches the predicate
 * @example ```js
 * findParentNodeClosestToPos($from, node => node.type.name === 'paragraph')
 * ```
 */
export declare function findParentNodeClosestToPos($pos: ResolvedPos, predicate: Predicate): {
    pos: number;
    start: number;
    depth: number;
    node: ProseMirrorNode;
} | undefined;
