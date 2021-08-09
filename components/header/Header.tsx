import React, { Fragment } from 'react';
import {
  Navbar,
  Nav,
  Button,
  Form,
  FormControl,
  Card,
  Modal,
} from 'react-bootstrap';
import styles from './Header.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import logoIcon from '../../public/images/logo-icon.svg';
import magnifierIcon from '../../public/images/icon/magnifier.svg';
import accountIcon from '../../public/images/icon/account.svg';
import { WsProvider, ApiPromise } from '@polkadot/api';
import { web3Accounts, web3Enable } from '@polkadot/extension-dapp';
import {
  ROUTER_COMMUNITY_PAGE,
  ROUTER_HOME_PAGE,
  ROUTER_LEARN_PAGE,
  ROUTER_MARKETPLACE_PAGE,
  ROUTER_MY_ASSETS_PAGE,
} from '../../constant/router';
import { useRouter } from 'next/router';

const ModalConnectWallet = (props: any) => {
  const { show, onClosePopup, onConnectWalletDone } = props;
  const [accountAddress, setAccountAddress] = React.useState<string>('');
  const [accountList, setAccountList] = React.useState<any>([]);

  const handleSubmit = async () => {
    const wsProvider = new WsProvider(
      process.env.NEXT_PUBLIC_POLKADOT_WS_PROVIDER,
    );
    const api = await ApiPromise.create({ provider: wsProvider });

    if (accountAddress) {
      const accountDetail = await api.query.system.account(accountAddress);
      localStorage.setItem('walletAddress', accountAddress);

      onConnectWalletDone(accountDetail, accountAddress);
      onClosePopup();
    }
  };

  React.useEffect(() => {
    const initPage = async function () {
      await web3Enable('Raremint App');
      const allAccounts = await web3Accounts();
      setAccountList(allAccounts);
    };

    initPage();
  }, []);

  return (
    <Modal show={show} onHide={onClosePopup} backdrop='static' keyboard={false}>
      <Modal.Body>
        <h6>
          <b>Select your account which you want to connect:</b>
        </h6>

        <select
          className='form-control'
          onChange={(event) => {
            setAccountAddress(event.target.value);
          }}
        >
          <option value=''>Select Your Account</option>

          {accountList.length > 0 &&
            accountList.map((account: any, index: number) => (
              <option key={index} value={account.address}>
                {account.meta?.name}
              </option>
            ))}
        </select>
      </Modal.Body>

      <Modal.Footer className='justify-content-between'>
        <Button variant='outline-secondary' onClick={onClosePopup}>
          Close
        </Button>

        <Button variant='primary' onClick={handleSubmit}>
          Connect
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

const Header = () => {
  const router = useRouter();
  const [account, setAccount] = React.useState<any>(null);
  const [accountAddress, setAccountAddress] = React.useState<any>('');
  const [showWalletInfo, setShowWalletInfo] = React.useState<boolean>(false);
  const [showConnectWallet, setShowConnectWallet] =
    React.useState<boolean>(false);

  const toggleShowWalletInfo = () => setShowWalletInfo(!showWalletInfo);

  const handleClosePopup = () => setShowConnectWallet(false);

  const handleDisconnect = () => {
    localStorage.removeItem('walletAddress');

    setAccount(null);
    setShowWalletInfo(false);
  };

  React.useEffect(() => {
    const initPage = async function () {
      await web3Enable('Raremint App');

      const accountAddress = localStorage.getItem('walletAddress');

      if (accountAddress) {
        const wsProvider = new WsProvider(
          process.env.NEXT_PUBLIC_POLKADOT_WS_PROVIDER,
        );
        const api = await ApiPromise.create({ provider: wsProvider });
        const accountDetail = await api.query.system.account(accountAddress);

        setAccount(accountDetail);
        setAccountAddress(accountAddress);
      }
    };

    initPage();
  }, []);

  return (
    <header className={styles.header}>
      <Navbar className='position-fixed w-100' style={{ top: '60px' }}>
        <Link href={ROUTER_HOME_PAGE} passHref>
          <Navbar.Brand>
            <Image src={logoIcon} alt='RareMint Logo' />{' '}
            <span className='ml-2'>RareMint</span>
          </Navbar.Brand>
        </Link>
        <Form inline className='mr-auto nav-search'>
          <FormControl type='text' placeholder='Search Marketplace' />
          <Button variant='outline-secondary' size='sm'>
            <Image src={magnifierIcon} alt='Magnifier Icon' />
          </Button>
        </Form>

        <Nav>
          <Link href={ROUTER_MARKETPLACE_PAGE}>
            <a
              className={[
                'nav-link',
                router.pathname === ROUTER_MARKETPLACE_PAGE ? 'active' : '',
              ].join(' ')}
            >
              Marketplace
            </a>
          </Link>
          <Link href={ROUTER_COMMUNITY_PAGE}>
            <a
              className={[
                'nav-link',
                router.pathname === ROUTER_COMMUNITY_PAGE ? 'active' : '',
              ].join(' ')}
            >
              Community
            </a>
          </Link>
          <Link href={ROUTER_LEARN_PAGE}>
            <a
              className={[
                'nav-link',
                router.pathname === ROUTER_LEARN_PAGE ? 'active' : '',
              ].join(' ')}
            >
              Learn
            </a>
          </Link>

          {account ? (
            <Fragment>
              <Link href={ROUTER_MY_ASSETS_PAGE}>
                <a
                  className={[
                    'nav-link',
                    router.pathname === ROUTER_MY_ASSETS_PAGE ? 'active' : '',
                  ].join(' ')}
                >
                  My Assets
                </a>
              </Link>
              <Nav.Link className='py-0' onClick={toggleShowWalletInfo}>
                <Image src={accountIcon} alt='Account Icon' />
              </Nav.Link>
            </Fragment>
          ) : (
            <Fragment>
              <Nav.Link
                className='p-0'
                onClick={() => setShowConnectWallet(true)}
              >
                <Button variant='primary' size='sm' className='ml-3'>
                  Connect
                </Button>
              </Nav.Link>
            </Fragment>
          )}
        </Nav>
      </Navbar>

      {account && (
        <Card
          className={[
            styles.walletPopup,
            showWalletInfo ? styles.walletPopupShow : '',
          ].join(' ')}
        >
          <Card.Body className={styles.walletPopupBody}>
            <Card.Title className={styles.walletPopupTitle}>
              Wallet ID
            </Card.Title>

            <Card.Text className={styles.walletPopupAddress}>
              {accountAddress}
            </Card.Text>

            <Card.Title className={styles.walletPopupTitle}>
              Wallet Balance
            </Card.Title>

            <Card.Text className={styles.walletPopupAddress}>
              {account.data.free.toHuman()}
            </Card.Text>

            <Button variant='primary' size='lg' onClick={handleDisconnect}>
              Disconnect
            </Button>
          </Card.Body>
        </Card>
      )}

      <ModalConnectWallet
        show={showConnectWallet}
        onClosePopup={handleClosePopup}
        onConnectWalletDone={(accountDetail: any, accountAddress: string) => {
          setAccount(accountDetail);
          setAccountAddress(accountAddress);
        }}
      />
    </header>
  );
};

export default Header;
