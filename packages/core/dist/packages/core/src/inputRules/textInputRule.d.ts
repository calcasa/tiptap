import { InputRule, InputRuleFinder } from '../InputRule.js';
/**
 * Build an input rule that replaces text when the
 * matched text is typed into it.
 * @see https://tiptap.dev/guide/custom-extensions/#input-rules
 */
export declare function textInputRule(config: {
    find: InputRuleFinder;
    replace: string;
}): InputRule;
