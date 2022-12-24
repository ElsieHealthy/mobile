import React from 'react';
import {StyleProp, StyleSheet, TextStyle} from 'react-native';
import Markdown, {
  MarkdownIt,
  RenderRules,
  RenderFunction,
} from 'react-native-markdown-display';

import {Colors} from '../Colors';
import {textStyles} from './Text';

interface MarkdownProps {
  content: string;
  bodyStyle?: StyleProp<TextStyle>;

  htmlBlock?: RenderFunction;
}

export const RenderMarkdown = ({
  content,
  bodyStyle = {},
  ...props
}: MarkdownProps) => {
  const markdownItInstance = MarkdownIt({
    typographer: true,
    breaks: true,
    html: true,
  });

  let rules: RenderRules = {
    body: (node, children) => children,
  };

  if (props.htmlBlock) {
    rules = {
      ...rules,
      html_block: props.htmlBlock,
      html_inline: props.htmlBlock,
    };
  }

  return (
    <Markdown
      rules={rules}
      markdownit={markdownItInstance}
      style={{
        body: {
          ...textStyles.body,
          ...(bodyStyle as object),
        },
        link: {color: Colors.Primary.Purple},
        heading1: {
          ...textStyles.headline,
          ...styles.heading,
        },
        heading2: {...textStyles.titleTwo, ...styles.heading},
        heading3: {...textStyles.titleThree, ...styles.heading},
        heading4: {...textStyles.captionOne, ...styles.heading},
        heading5: {...textStyles.captionTwo, ...styles.heading},
        list_item: styles.listItem,
        bullet_list_icon: styles.bulletListIcon,
      }}>
      {content}
    </Markdown>
  );
};

const styles = StyleSheet.create({
  listItem: {
    marginBottom: 12,
  },

  bulletListIcon: {
    marginRight: 12,
    fontSize: 30,
    lineHeight: 30,
  },

  heading: {
    paddingHorizontal: 16,
  },
});
