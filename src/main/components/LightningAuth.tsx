import { CSSProperties } from "preact/compat";

import { Title } from "./Title";
import { QrCode } from "./QrCode";
import { CopyCode } from "./CopyCode";
import { LightningButton } from "./LightningButton";

import { hardConfig } from "../config/hard";

export function LightningAuth({
  title,
  lnurl,
  theme,
}: {
  title: string;
  lnurl: string;
  theme?: {
    loading?: CSSProperties;
    wrapper?: CSSProperties;
    title?: CSSProperties;
    qr?: CSSProperties;
    copy?: CSSProperties;
    button?: CSSProperties;
  };
}) {
  return (
    <div id={hardConfig.ids.wrapper} style={theme?.wrapper}>
      <Title style={theme?.title}>{title}</Title>

      <QrCode lnurl={lnurl} style={theme?.qr} />

      <CopyCode lnurl={lnurl} style={theme?.copy} />

      <LightningButton lnurl={lnurl} style={theme?.button} />
    </div>
  );
}
