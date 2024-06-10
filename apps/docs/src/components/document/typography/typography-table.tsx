import { meta } from '@govie-ds/tokens';
import { SampleList, toSampleTokens } from '../common/sample-list';
import { sampleTextLong } from '../common/sample-text';
import { TokenValueComposite } from '../common/token-value';

function remToPx(remString: string) {
  return Number(remString.replace('rem', '')) * 16;
}

function lineHeightToPx({
  fontSize,
  lineHeight,
}: {
  fontSize: string;
  lineHeight: number;
}) {
  const unitless = Number(fontSize.replace('rem', '')) * lineHeight * 16;
  const pixels = Number.isInteger(unitless) ? unitless : unitless.toFixed(2);
  return `${pixels}px`;
}

function TypographyValueComposite({
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
}: {
  fontFamily: string[];
  fontSize: string;
  fontWeight: number;
  lineHeight: number;
}) {
  return (
    <TokenValueComposite
      tokens={[
        {
          name: 'Font family',
          value: fontFamily.join(', '),
        },
        {
          name: 'Font size',
          value: fontSize,
          converted: `e.g. ${remToPx(fontSize)}px`,
        },
        {
          name: 'Font weight',
          value: fontWeight.toString(),
        },
        {
          name: 'Line height',
          value: lineHeight.toString(),
          converted: `e.g. ${lineHeightToPx({ fontSize, lineHeight })}`,
        },
      ]}
    />
  );
}

type Font = {
  fontFamily: string[];
  fontSize: string;
  fontWeight: number;
  lineHeight: number;
};

export function TypographyTable() {
  return (
    <SampleList<Font>
      name="typography"
      tokens={toSampleTokens(meta.light.resolved.primitive.typography.regular)}
      renderValue={(value) => <TypographyValueComposite {...value} />}
      renderExample={(value) => (
        <span
          style={{
            fontFamily: value.fontFamily.join(', '),
            fontSize: value.fontSize,
            fontWeight: value.fontWeight,
            lineHeight: value.lineHeight,
          }}
        >
          {sampleTextLong}
        </span>
      )}
    />
  );
}
