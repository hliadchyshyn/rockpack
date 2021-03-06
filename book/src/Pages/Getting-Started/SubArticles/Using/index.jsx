import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import img from '../../../../../readme_assets/rockpack_starter_1.v2.jpg';

const installationCode = `
npm i @rockpack/starter -g
`;

const rockpackCode = `
rockpack <project name>
`;

const Page = () => (
  <div>
    <p>The easiest way to start is using rockpack/starter module. This module can help you to create the backbone of an
      application. It supports different types of applications:
    </p>

    <ul>
      <li>Simple Single Page application</li>
      <li>Server-Side Render</li>
      <li>Server-Side Render + Redux + Sagas + React-Router + project structure</li>
      <li>UMD library or React Component</li>
      <li>Nodejs application</li>
    </ul>

    <p>1. Installation:</p>

    <Highlight {...defaultProps} code={installationCode} language="bash">
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>

    <p>2. Creating an App:</p>

    <Highlight {...defaultProps} code={rockpackCode} language="bash">
      {/* eslint-disable-next-line sonarjs/no-identical-functions */}
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
          {/* eslint-disable-next-line sonarjs/no-identical-functions */}
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>

    <p>3. Select the type of application, select the required modules:</p>

    <img src={img} alt="Rockpack CLI" />

    <hr />

    {/* eslint-disable-next-line max-len */}
    <p>You can use Rockpack modularly, just what you need. Or in a Legacy project. These approaches are described below.</p>
  </div>
);

export default {
  title: 'Using',
  name: 'using',
  component: Page
};
