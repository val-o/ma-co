import * as React from 'react';
import './App.scss';

import { Footer, Header } from '../../common/components/layout';
import { PHONE_NUMBER } from '../../constants';
import { CheckoutPageContainer } from '../checkout/CheckoutPageContainer';

export class App extends React.PureComponent<{}, {}> {
    constructor(props: {}) {
        super(props);

        this.state = {};
    }

    private renderBody() {
        return <CheckoutPageContainer />;
    }

    public render() {
        return (
            <React.Fragment>
                <Header phone={PHONE_NUMBER} />
                {this.renderBody()}
                <Footer />
            </React.Fragment>
        );
    }

}
