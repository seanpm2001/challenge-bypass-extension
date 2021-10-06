import { Button } from '@popup/components/Button';
import { Container } from '@popup/components/Container';
import { ClearButton } from '@popup/components/ClearButton';
import { CloudflareButton } from '@popup/components/CloudflareButton';
import { HcaptchaButton } from '@popup/components/HcaptchaButton';
import { Header } from '@popup/components/Header';
import React from 'react';
import styles from './styles.module.scss';

export function App(): JSX.Element {
    return (
        <div className={styles.app}>
            <Header />
            <Container>
                <CloudflareButton />
                <HcaptchaButton />
                <Button>Log CF Redemption to Console</Button>
                <ClearButton />
                <Button>View on Github</Button>
            </Container>
        </div>
    );
}
