// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';
import {Tab as ReactBootstrapTab} from 'react-bootstrap';

type Props = {
    children?: React.ReactNode;
    eventKey?: any;
    title?: React.ReactNode | undefined;
    unmountOnExit?: boolean | undefined;
    tabClassName?: string | undefined;
}

export default function Tab({children, title, unmountOnExit, tabClassName, eventKey}: Props) {
    return (
        <ReactBootstrapTab
            eventKey={eventKey}
            title={title}
            unmountOnExit={unmountOnExit}
            tabClassName={tabClassName}
        >
            {children}
        </ReactBootstrapTab>
    );
}