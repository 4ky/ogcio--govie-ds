import { variables } from '@govie-ds/tokens';
import { Text } from '../text/text.js';

export type ParagraphAs = 'p' | 'span';

export type ParagraphSize = 'lg' | 'md' | 'sm';

export function Paragraph({
  as: As = 'p',
  size = 'md',
  children,
}: {
  as?: ParagraphAs;
  size?: ParagraphSize;
  children: React.ReactNode;
}) {
  return (
    <Text
      as={As}
      size={size}
      style={{
        marginTop: 0,
        marginBottom: As === 'p' ? '1.5em' : undefined, // TODO: tokens
        fontFamily: variables.primitive.font.family.primary,
        color: variables.primitive.color.gray['950'],
        maxWidth: As === 'p' ? '65ch' : undefined,
      }}
    >
      {children}
    </Text>
  );
}
