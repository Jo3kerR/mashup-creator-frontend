import React, { useState } from "react";
import Spinner from "./Loader";
import { CopyToClipboard } from "react-copy-to-clipboard";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

import "../../css/loader.css";

function ContestLink({ link }) {
  const [copied, setCopied] = useState(false);

  if (link === undefined) return;
  if (link === "loading")
    return (
      <>
        <Spinner />
        <div>Please wait, this takes around 1-2 minutes...</div>
      </>
    );
  if (link.startsWith("https://")) {
    return (
      <>
        <a href={link} className="link" target="_blank">
          {link}
        </a>
        <CopyToClipboard
          text={link}
          onCopy={() => {
            setCopied(true);
          }}
        >
          <ContentCopyIcon className="copyButton" />
        </CopyToClipboard>
      </>
    );
  }
  return <>{link}</>;
}

export default ContestLink;
