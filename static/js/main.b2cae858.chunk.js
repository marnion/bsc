;(this['webpackJsonpvault-finance'] =
  this['webpackJsonpvault-finance'] || []).push([
  [0],
  {
    211: function (e, t, a) {},
    213: function (e, t, a) {},
    225: function (e, t) {},
    250: function (e, t) {},
    252: function (e, t) {},
    332: function (e, t) {},
    334: function (e, t) {},
    343: function (e, t) {},
    345: function (e, t) {},
    370: function (e, t) {},
    375: function (e, t) {},
    377: function (e, t) {},
    384: function (e, t) {},
    397: function (e, t) {},
    476: function (e, t, a) {
      'use strict'
      a.r(t)
      var n = a(0),
        s = a(15),
        i = a.n(s),
        c = a(199),
        r = a.n(c),
        l = (a(211), a(200)),
        o = a(203),
        d = a(17),
        u = a.n(d),
        m = a(61),
        h = a(4),
        p = a(6),
        j = a(50),
        b = a(9),
        f = a(8),
        O = (a.p, a(213), a(72)),
        x = a.n(O),
        y = '0x660Df66F5953b2E16776c349B4F338f5fD430d0c', //contract
        v = [
          {
            constant: !1,
            inputs: [{ name: '_upline', type: 'address' }],
            name: 'deposit',
            outputs: [],
            payable: !0,
            stateMutability: 'payable',
            type: 'function',
          },
          {
            anonymous: !1,
            inputs: [
              { indexed: !0, name: 'addr', type: 'address' },
              { indexed: !0, name: 'upline', type: 'address' },
            ],
            name: 'Upline',
            type: 'event',
          },
          {
            anonymous: !1,
            inputs: [
              { indexed: !0, name: 'addr', type: 'address' },
              { indexed: !1, name: 'amount', type: 'uint256' },
            ],
            name: 'NewDeposit',
            type: 'event',
          },
          {
            anonymous: !1,
            inputs: [
              { indexed: !0, name: 'addr', type: 'address' },
              { indexed: !0, name: 'from', type: 'address' },
              { indexed: !1, name: 'amount', type: 'uint256' },
            ],
            name: 'DirectPayout',
            type: 'event',
          },
          { payable: !0, stateMutability: 'payable', type: 'fallback' },
          {
            inputs: [{ name: '_owner', type: 'address' }],
            payable: !1,
            stateMutability: 'nonpayable',
            type: 'constructor',
          },
          {
            constant: !1,
            inputs: [],
            name: 'withdraw',
            outputs: [],
            payable: !1,
            stateMutability: 'nonpayable',
            type: 'function',
          },
          {
            anonymous: !1,
            inputs: [
              { indexed: !0, name: 'addr', type: 'address' },
              { indexed: !1, name: 'amount', type: 'uint256' },
            ],
            name: 'Withdraw',
            type: 'event',
          },
          {
            anonymous: !1,
            inputs: [
              { indexed: !0, name: 'addr', type: 'address' },
              { indexed: !1, name: 'amount', type: 'uint256' },
            ],
            name: 'LimitReached',
            type: 'event',
          },
          {
            constant: !0,
            inputs: [],
            name: 'contractInfo',
            outputs: [
              { name: '_total_users', type: 'uint256' },
              { name: '_total_deposited', type: 'uint256' },
              { name: '_total_withdraw', type: 'uint256' },
            ],
            payable: !1,
            stateMutability: 'view',
            type: 'function',
          },
          {
            constant: !0,
            inputs: [
              { name: '', type: 'address' },
              { name: '', type: 'uint256' },
            ],
            name: 'direct_referrals',
            outputs: [{ name: '', type: 'address' }],
            payable: !1,
            stateMutability: 'view',
            type: 'function',
          },
          {
            constant: !0,
            inputs: [],
            name: 'getBalance',
            outputs: [{ name: '', type: 'uint256' }],
            payable: !1,
            stateMutability: 'view',
            type: 'function',
          },
          {
            constant: !0,
            inputs: [{ name: '_addr', type: 'address' }],
            name: 'getDirectReferrals',
            outputs: [
              { name: 'addrs', type: 'address[]' },
              { name: 'total', type: 'uint256' },
            ],
            payable: !1,
            stateMutability: 'view',
            type: 'function',
          },
          {
            constant: !0,
            inputs: [{ name: '_amount', type: 'uint256' }],
            name: 'maxPayoutOf',
            outputs: [{ name: '', type: 'uint256' }],
            payable: !1,
            stateMutability: 'view',
            type: 'function',
          },
          {
            constant: !0,
            inputs: [],
            name: 'owner',
            outputs: [{ name: '', type: 'address' }],
            payable: !1,
            stateMutability: 'view',
            type: 'function',
          },
          {
            constant: !0,
            inputs: [{ name: '_addr', type: 'address' }],
            name: 'payoutOf',
            outputs: [
              { name: 'payout', type: 'uint256' },
              { name: 'max_payout', type: 'uint256' },
            ],
            payable: !1,
            stateMutability: 'view',
            type: 'function',
          },
          {
            constant: !0,
            inputs: [],
            name: 'sender',
            outputs: [{ name: '', type: 'address' }],
            payable: !1,
            stateMutability: 'view',
            type: 'function',
          },
          {
            constant: !0,
            inputs: [],
            name: 'total_deposited',
            outputs: [{ name: '', type: 'uint256' }],
            payable: !1,
            stateMutability: 'view',
            type: 'function',
          },
          {
            constant: !0,
            inputs: [],
            name: 'total_users',
            outputs: [{ name: '', type: 'uint256' }],
            payable: !1,
            stateMutability: 'view',
            type: 'function',
          },
          {
            constant: !0,
            inputs: [],
            name: 'total_withdraw',
            outputs: [{ name: '', type: 'uint256' }],
            payable: !1,
            stateMutability: 'view',
            type: 'function',
          },
          {
            constant: !0,
            inputs: [{ name: '_addr', type: 'address' }],
            name: 'userInfo',
            outputs: [
              { name: 'upline', type: 'address' },
              { name: 'deposit_time', type: 'uint40' },
              { name: 'deposit_amount', type: 'uint256' },
              { name: 'payouts', type: 'uint256' },
              { name: 'direct_bonus', type: 'uint256' },
            ],
            payable: !1,
            stateMutability: 'view',
            type: 'function',
          },
          {
            constant: !0,
            inputs: [{ name: '_addr', type: 'address' }],
            name: 'userInfoTotals',
            outputs: [
              { name: 'referrals', type: 'uint256' },
              { name: 'total_deposits', type: 'uint256' },
              { name: 'total_payouts', type: 'uint256' },
              { name: 'total_structure', type: 'uint256' },
            ],
            payable: !1,
            stateMutability: 'view',
            type: 'function',
          },
          {
            constant: !0,
            inputs: [{ name: '', type: 'address' }],
            name: 'users',
            outputs: [
              { name: 'cycle', type: 'uint256' },
              { name: 'upline', type: 'address' },
              { name: 'referrals', type: 'uint256' },
              { name: 'payouts', type: 'uint256' },
              { name: 'direct_bonus', type: 'uint256' },
              { name: 'deposit_amount', type: 'uint256' },
              { name: 'deposit_payouts', type: 'uint256' },
              { name: 'deposit_time', type: 'uint40' },
              { name: 'total_deposits', type: 'uint256' },
              { name: 'total_payouts', type: 'uint256' },
              { name: 'total_structure', type: 'uint256' },
            ],
            payable: !1,
            stateMutability: 'view',
            type: 'function',
          },
        ],
        g = (function (e) {
          Object(b.a)(a, e)
          var t = Object(f.a)(a)
          function a() {
            return Object(h.a)(this, a), t.apply(this, arguments)
          }
          return (
            Object(p.a)(a, [
              {
                key: 'render',
                value: function () {
                  var e = this
                  return Object(n.jsxs)('div', {
                    class: 'big-div',
                    children: [
                      Object(n.jsx)('p', {
                        class: 'small-card-title card-title',
                        children: 'Guide To Join',
                      }),
                      Object(n.jsxs)('div', {
                        class: 'card-description',
                        children: [
                          Object(n.jsx)('p', {
                            class: 'card-heading',
                            children: 'GUIDE ON HOW TO JOIN BNB Chain:',
                          }),
                          Object(n.jsxs)('p', {
                            children: [
                              Object(n.jsx)('em', { children: 'REMINDER:' }),
                              " Use your sponsor referral link if it's your first time depositing into small-card-title card-title program.",
                            ],
                          }),
                          Object(n.jsxs)('p', {
                            children: [
                              'To join the BNB Chain Program you must use',
                              Object(n.jsx)('em', { children: 'Trust Wallet' }),
                              '.',
                            ],
                          }),
                          Object(n.jsxs)('p', {
                            class: 'link-group',
                            children: [
                              '(',
                              Object(n.jsx)('a', {
                                class: 'link',
                                href:
                                  'https://play.google.com/store/apps/details?id=com.tronwallet2&hl=en_US&gl=US',
                                target: '_blank',
                                rel: 'noopener noreferrer',
                                children: 'Android Device',
                              }),
                              '|',
                              Object(n.jsx)('a', {
                                class: 'link',
                                href:
                                  'https://apps.apple.com/us/app/tronwallet-blockchain-wallet/id1412536016',
                                target: '_blank',
                                rel: 'noopener noreferrer',
                                children: 'Apple Device',
                              }),
                              '|',
                              Object(n.jsx)('a', {
                                class: 'link',
                                href:
                                  'https://chrome.google.com/webstore/detail/tronlink%EF%BC%88%E6%B3%A2%E5%AE%9D%E9%92%B1%E5%8C%85%EF%BC%89/ibnejdfjmmkpcnlpebklmnkoeoihofec',
                                target: '_blank',
                                rel: 'noopener noreferrer',
                                children: 'Browser Wallet',
                              }),
                              ')',
                            ],
                          }),
                          Object(n.jsx)('p', {
                            class: 'card-p',
                            children:
                              'Trust Wallet is a secure crypto wallet and exchange for BINANCE SMART CHAIN (BNB). The easiest and safest way to buy and sell cryptocurrencies. You can easily exchange Bitcoin, Ethereum or USDT to BINANCE SMART CHAIN (BNB) using the mobile application wallet and start joining BNB Chain Program. Below are the steps to set up Trust Wallet.',
                          }),
                          Object(n.jsxs)('ul', {
                            children: [
                              Object(n.jsx)('li', {
                                children:
                                  '1. Download and set up your Trust Wallet',
                              }),
                              Object(n.jsx)('li', {
                                children:
                                  '2. Save your wallet 12 mnemonic word phrase',
                              }),
                              Object(n.jsx)('li', {
                                children:
                                  '3. Fund your wallet with BNB to join.',
                              }),
                              Object(n.jsx)('li', {
                                children:
                                  '4. Go to Dapp browser in your wallet and enter the ref link.',
                              }),
                              Object(n.jsx)('li', {
                                children:
                                  '5. Select amount to deposit and click join.',
                              }),
                            ],
                          }),
                          Object(n.jsx)('hr', {}),
                          Object(n.jsx)('p', {
                            class: 'card-heading',
                            children: 'METAMASK - PC BROWSER EXTENSION WALLET',
                          }),
                          Object(n.jsx)('p', {
                            class: 'card-p-title',
                            children: 'What is Metamask?',
                          }),
                          Object(n.jsx)('p', {
                            class: 'card-p',
                            children:
                              'Metamask is available as a browser extension wallet for Binance Smart Chain to join in BNB Chain Program, Metamask equips you with a key vault, secure login and everything you need to manage your digital assets.',
                          }),
                          Object(n.jsx)('p', {
                            class: 'card-p',
                            children:
                              'Metamask generates passwords, 12 mnemonic word phrase and private key for the security of your wallet.',
                          }),
                          Object(n.jsxs)('p', {
                            class: 'link-group',
                            children: [
                              'To download you can visit',
                              Object(n.jsx)('a', {
                                class: 'link',
                                href: 'https://www.tronlink.org/',
                                target: '_blank',
                                rel: 'noopener noreferrer',
                                children: 'https://www.tronlink.org/',
                              }),
                            ],
                          }),
                          Object(n.jsxs)('p', {
                            class: 'card-p',
                            children: [
                              Object(n.jsx)('em', { children: 'REMINDER:' }),
                              ' Make sure to add extension and pinned it to your browser.',
                            ],
                          }),
                          Object(n.jsx)('p', {
                            class: 'card-p',
                            children:
                              'How to connect Metamask to BNB Chain smart contract?',
                          }),
                          Object(n.jsxs)('ul', {
                            children: [
                              Object(n.jsx)('li', {
                                children:
                                  '1. Open your web browser with Metamask download',
                              }),
                              Object(n.jsx)('li', {
                                children:
                                  '2. Enter sponsor referral link and click enter',
                              }),
                              Object(n.jsx)('li', {
                                children:
                                  '3. Allow Metamask wallet to connect to .org',
                              }),
                              Object(n.jsx)('li', {
                                children:
                                  '4. Make sure to fund your wallet with BNB to join.',
                              }),
                              Object(n.jsx)('li', {
                                children:
                                  '5. Select amount to deposit and click join.',
                              }),
                            ],
                          }),
                        ],
                      }),
                      Object(n.jsx)('a', {
                        type: 'button',
                        class: 'btn-normal card-btn',
                        onClick: function () {
                          return e.props.toggleGuideToJoinVisibility()
                        },
                        children: 'Back',
                      }),
                    ],
                  })
                },
              },
            ]),
            a
          )
        })(s.Component),
        N = (function (e) {
          Object(b.a)(a, e)
          var t = Object(f.a)(a)
          function a() {
            return Object(h.a)(this, a), t.apply(this, arguments)
          }
          return (
            Object(p.a)(a, [
              {
                key: 'render',
                value: function () {
                  var e = this
                  return Object(n.jsxs)('div', {
                    class: 'big-div',
                    children: [
                      Object(n.jsx)('p', {
                        class: 'small-card-title card-title',
                        children: 'Compensation Plan',
                      }),
                      Object(n.jsxs)('div', {
                        class: 'card-description',
                        children: [
                          Object(n.jsx)('p', {
                            class: 'card-p',
                            children:
                              'BNB Chain is a decentralized community support fund built on Binance Smart Chain blockchain smart contract technology.',
                          }),
                          Object(n.jsx)('p', {
                            class: 'card-p',
                            children:
                              'The "BNB Chain" Smart Contract is designed to provide everyone with an independent, financial support fund, based on Smart Contract technology, supported by multiple DeFi projects in Tron, Binance Smart Chain and Ethereum.',
                          }),
                          Object(n.jsx)('p', {
                            class: 'card-p',
                            children:
                              'Everyone can contribute BNB to the community fund and support the "BNB Chain" community stakers, once the participant activates the contract code he/she will start receiving support back from other community stakers.',
                          }),
                          Object(n.jsx)('p', {
                            class: 'card-p',
                            children:
                              'This is 100% decentralized and a community-based project, the funds you will receive from BNB Chain program will come from other community stakers and based upon your own and the community effort as this is a P2P support model.',
                          }),
                          Object(n.jsx)('p', {
                            class: 'card-p',
                            children: Object(n.jsx)('em', {
                              children:
                                'You support others and others support you back.',
                            }),
                          }),
                          Object(n.jsx)('p', {
                            class: 'card-p',
                            children:
                              '"BNB Chain" is viewed as a decentralized \u201cthird party\u201d which insures complete fairness, transparency and justice for all according to the algorithm code.',
                          }),
                          Object(n.jsx)('p', {
                            class: 'card-p',
                            children:
                              'There are no mediators or intermediaries, no owners, no company, no CEO and no human interaction, which is effectively guaranteeing the fairness of all participating partners and partners funds according to the rules of the Smart Contract.',
                          }),
                          Object(n.jsx)('p', {
                            class: 'card-p',
                            children:
                              'This is the most reasonable, safest, and best cutting-edge financial community support model available at this time.',
                          }),
                          Object(n.jsx)('p', {
                            class: 'card-p',
                            children:
                              'You can participate in "BNB Chain" by depositing a minimum of 1 BNB, you are now eligable to receive 350% back.',
                          }),
                          Object(n.jsx)('p', {
                            class: 'card-p',
                            children:
                              'The 350% will be returned in 3 ways (1 passive and 2 via marketing) and when the 350% is accumulated through any of the 3 ways, a new deposit must be made equal or greater to continue receiving from the fund.',
                          }),
                          Object(n.jsx)('p', {
                            class: 'p-left',
                            children:
                              '1. 3.5% Daily return on your Deposit (maximum 100 days) 100% Passive.',
                          }),
                          Object(n.jsx)('p', {
                            class: 'p-left',
                            children:
                              '2. 15% Direct Referral Commission for Sharing and Growing the Community Fund.',
                          }),
                          Object(n.jsx)('hr', {}),
                          Object(n.jsx)('p', {
                            class: 'card-p',
                            children: 'Minimum and maximum deposit.',
                          }),
                          Object(n.jsxs)('p', {
                            children: [
                              Object(n.jsx)('em', { children: '1st cycle' }),
                              ', minimum deposit of ',
                              Object(n.jsx)('em', { children: '1 BNB' }),
                              ', up to ',
                              Object(n.jsx)('em', { children: '100,000 BNB.' }),
                            ],
                          }),
                          Object(n.jsxs)('p', {
                            children: [
                              Object(n.jsx)('em', { children: '2nd cycle' }),
                              ', equal or greater than previous deposit, up to ',
                              Object(n.jsx)('em', { children: '300,000 BNB.' }),
                            ],
                          }),
                          Object(n.jsxs)('p', {
                            children: [
                              Object(n.jsx)('em', { children: '3rd cycle' }),
                              ', equal or greater than previous deposit, up to ',
                              Object(n.jsx)('em', { children: '900,000 BNB.' }),
                            ],
                          }),
                          Object(n.jsxs)('p', {
                            children: [
                              Object(n.jsx)('em', {
                                children: '4th cycle and beyond',
                              }),
                              ', equal or greater than previous deposit, up to ',
                              Object(n.jsx)('em', {
                                children: '2,000,000 BNB',
                              }),
                              '.',
                            ],
                          }),
                          Object(n.jsx)('hr', {}),
                          Object(n.jsx)('p', {
                            class: 'card-p',
                            children: Object(n.jsx)('em', {
                              children: 'IMPORTANT NOTES*',
                            }),
                          }),
                          Object(n.jsx)('p', {
                            class: 'p-left',
                            children:
                              '*BNB Chain is a community-based project, 100% decentralized, P2P transactions through Smart Contract.',
                          }),
                          Object(n.jsx)('p', {
                            class: 'p-left',
                            children: '*Each Deposit Cycle is 350%.',
                          }),
                          Object(n.jsx)('p', {
                            class: 'p-left',
                            children:
                              '*When 350% is received, a new deposit must be made to continue earning / receiving from any of the 3 ways.',
                          }),
                          Object(n.jsx)('p', {
                            class: 'p-left',
                            children:
                              '*Minimum entry is 1 BNB, open to all participants, no restrictions.',
                          }),
                          Object(n.jsx)('p', {
                            class: 'p-left',
                            children:
                              '*No referrals required in order to receive 3.5% daily Income, 100% passive.',
                          }),
                          Object(n.jsx)('p', {
                            class: 'p-left',
                            children:
                              '*Increase the speed of your returns by growing the community fund through marketing / sharing of "BNB Chain".',
                          }),
                          Object(n.jsx)('p', {
                            class: 'p-left',
                            children:
                              '*Admin and Dev team is developing multiple DeFi projects in Tron, Binance Smart Chain and Ethereum.',
                          }),
                        ],
                      }),
                      Object(n.jsx)('a', {
                        class: 'btn-normal card-btn',
                        onClick: function () {
                          return e.props.toggleCompensationPlanVisibility()
                        },
                        children: 'Back',
                      }),
                    ],
                  })
                },
              },
            ]),
            a
          )
        })(s.Component),
        w = (function (e) {
          Object(b.a)(a, e)
          var t = Object(f.a)(a)
          function a() {
            return Object(h.a)(this, a), t.apply(this, arguments)
          }
          return (
            Object(p.a)(a, [
              {
                key: 'render',
                value: function () {
                  var e = this
                  return Object(n.jsx)('div', {
                    id: 'modalPopUp',
                    className: 'modal '.concat(
                      this.props.visibility ? 'modal-show' : 'modal-hide',
                    ),
                    children: Object(n.jsxs)('div', {
                      className: 'popup-div',
                      children: [
                        Object(n.jsx)('span', {
                          className: 'popup-close',
                          onClick: function () {
                            return e.props.toggleModal()
                          },
                          children: '\xd7',
                        }),
                        Object(n.jsx)('p', {
                          className: 'popup-message',
                          children: this.props.message,
                        }),
                      ],
                    }),
                  })
                },
              },
            ]),
            a
          )
        })(s.Component),
        k = (function (e) {
          Object(b.a)(a, e)
          var t = Object(f.a)(a)
          function a(e) {
            var n
            return (
              Object(h.a)(this, a),
              ((n = t.call(this, e)).enableEdit = function () {
                var e = document.getElementById('referrorAddress')
                e.removeAttribute('disabled'), e.focus()
              }),
              (n.state = { referror: n.props.referror }),
              n
            )
          }
          return (
            Object(p.a)(a, [
              {
                key: 'render',
                value: function () {
                  var e = this
                  return Object(n.jsx)('div', {
                    id: 'ModalConfirmReferror',
                    className: 'modal '.concat(
                      this.props.visibility ? 'modal-show' : 'modal-hide',
                    ),
                    children: Object(n.jsxs)('div', {
                      className: 'popup-div',
                      children: [
                        Object(n.jsx)('span', {
                          className: 'popup-close',
                          onClick: function () {
                            return e.props.toggleModal()
                          },
                          children: '\xd7',
                        }),
                        Object(n.jsx)('label', {
                          className: 'contract-item-title',
                          children: 'Sponsor Wallet Address:',
                        }),
                        Object(n.jsx)('input', {
                          className: 'popup-input',
                          id: 'referrorAddress',
                          type: 'text',
                          value: this.state.referror,
                          onChange: function (t) {
                            e.setState({ referror: t.target.value })
                          },
                          disabled: !0,
                        }),
                        Object(n.jsx)('a', {
                          className: 'btn-normal popup-btn',
                          onClick: function () {
                            return e.enableEdit()
                          },
                          children: Object(n.jsx)('p', { children: 'EDIT' }),
                        }),
                        Object(n.jsxs)('p', {
                          className: 'popup-message',
                          children: [
                            Object(n.jsx)('p', {
                              children: 'Check your sponsor wallet address.',
                            }),
                            Object(n.jsx)('p', {
                              children:
                                'You can change it before proceeding with deposit.',
                            }),
                          ],
                        }),
                        Object(n.jsx)('a', {
                          className: 'btn-normal popup-btn',
                          onClick: function () {
                            return e.props.invest(e.state.referror)
                          },
                          children: Object(n.jsx)('p', { children: 'PROCEED' }),
                        }),
                      ],
                    }),
                  })
                },
              },
            ]),
            a
          )
        })(s.Component),
        B = (function (e) {
          Object(b.a)(a, e)
          var t = Object(f.a)(a)
          function a() {
            return Object(h.a)(this, a), t.apply(this, arguments)
          }
          return (
            Object(p.a)(a, [
              {
                key: 'render',
                value: function () {
                  return Object(n.jsxs)('div', {
                    id: 'loading',
                    className: 'modal modal-show',
                    children: [
                      Object(n.jsx)('div', {
                        className: 'img-gear-loading',
                        children: ' ',
                      }),
                      Object(n.jsx)('p', {
                        className: 'loading-message',
                        children: 'Loading...',
                      }),
                    ],
                  })
                },
              },
            ]),
            a
          )
        })(s.Component),
        C = (function (e) {
          Object(b.a)(a, e)
          var t = Object(f.a)(a)
          function a() {
            return Object(h.a)(this, a), t.apply(this, arguments)
          }
          return (
            Object(p.a)(a, [
              {
                key: 'render',
                value: function () {
                  var e = this
                  return Object(n.jsxs)('div', {
                    className: 'big-div',
                    children: [
                      Object(n.jsx)('p', {
                        className: 'small-card-title card-title',
                        children: 'Direct Referrals',
                      }),
                      Object(n.jsx)('center', {
                        children: Object(n.jsxs)('table', {
                          className: 'table',
                          children: [
                            Object(n.jsx)('thead', {
                              children: Object(n.jsx)('tr', {
                                className: 'table-row',
                              }),
                            }),
                            Object(n.jsx)('tbody', {
                              className: 'table-body',
                              children: this.props.directReferrals.map(
                                function (e, t) {
                                  return Object(n.jsx)(
                                    'tr',
                                    {
                                      className: 'table-row',
                                      children: Object(n.jsx)('td', {
                                        className: 'table-data',
                                        children: Object(n.jsx)('a', {
                                          href: 'https://explorer.binance.org/smart/address/'.concat(
                                            e,
                                            '/transactions',
                                          ),
                                          class: 'link',
                                          target: '_blank',
                                          title: e,
                                          rel: 'noopener noreferrer',
                                          children: e,
                                        }),
                                      }),
                                    },
                                    t,
                                  )
                                },
                              ),
                            }),
                          ],
                        }),
                      }),
                      Object(n.jsx)('a', {
                        type: 'button',
                        className: 'btn-normal card-btn',
                        onClick: function () {
                          return e.props.toggleDirectReferralsVisibility()
                        },
                        children: 'Back',
                      }),
                    ],
                  })
                },
              },
            ]),
            a
          )
        })(i.a.Component),
        D = (function (e) {
          Object(b.a)(a, e)
          var t = Object(f.a)(a)
          function a(e) {
            var n
            return (
              Object(h.a)(this, a),
              ((n = t.call(this, e)).timer = function () {
                var e =
                    new Date('January 20, 2021 00:00:00').getTime() -
                    new Date().getTime(),
                  t = Math.floor(e / 864e5),
                  a = Math.floor((e % 864e5) / 36e5),
                  s = Math.floor((e % 36e5) / 6e4),
                  i = Math.floor((e % 6e4) / 1e3)
                ;(t =
                  (t = t <= 99 ? '0'.concat(t) : t) <= 9 ? ''.concat(t) : t),
                  (a = a <= 9 ? '0'.concat(a) : a),
                  (s = s <= 9 ? '0'.concat(s) : s),
                  (i = i <= 9 ? '0'.concat(i) : i),
                  n.setState({
                    countdown: { days: t, hours: a, minutes: s, seconds: i },
                  }),
                  t.indexOf('-') > -1 && n.setState({ timerVisibility: !1 })
              }),
              (n.showErrorMessage = function (e) {
                n.setState({ showModalPopUp: !0, errorMessage: e })
              }),
              (n.toggleModalPopUp = function () {
                n.setState({ showModalPopUp: !n.state.showModalPopUp })
              }),
              (n.toggleModalConfirmReferror = function (e) {
                n.setState({
                  showModalConfirmReferror: !n.state.showModalConfirmReferror,
                  referror: e,
                })
              }),
              (n.state = {
                account: '',
                loading: !1,
                connection: 'CONNECT',
                investment: 0,
                contractDepositUSD: '$ 0',
                totalBNBDeposits: '---',
                smartContractBalance: '---',
                amountWithdrawnByMembers: '---',
                referredBy: '0x000000...00000000',
                nextIncomeCountdown: '00:00:00',
                invitationLink: '---',
                depositAmount: '---',
                incomeLimitRemain: '---',
                dailyIncome: '---',
                directReferralIncome: '---',
                availableWithdrawal: '---',
                totalAmountOfDeposited: 0,
                totalAmountOfReceived: 0,
                personalInvitedPartners: 0,
                totalCommunityParticipants: 0,
                guideToJoinVisibility: !1,
                compensationPlanVisibility: !1,
                directReferralsVisibility: !1,
                showModalPopUp: !1,
                errorMessage: '',
                showModalConfirmReferror: !1,
                referror: '',
                directReferrals: [],
                timerVisibility: !1,
                countdown: { days: 0, hours: 0, minutes: 0, seconds: 0 },
                usdPrice: 0,
                incomeLimitRemainUSD: 0,
                dailyIncomeUSD: 0,
                directReferralIncomeUSD: 0,
                availableWithdrawalUSD: 0,
                totalAmountOfDepositedUSD: 0,
                totalAmountOfReceivedUSD: 0,
              }),
              (n.toggleGuideToJoinVisibility = n.toggleGuideToJoinVisibility.bind(
                Object(j.a)(n),
              )),
              (n.toggleCompensationPlanVisibility = n.toggleCompensationPlanVisibility.bind(
                Object(j.a)(n),
              )),
              (n.toggleDirectReferralsVisibility = n.toggleDirectReferralsVisibility.bind(
                Object(j.a)(n),
              )),
              n
            )
          }
          return (
            Object(p.a)(a, [
              {
                key: 'componentWillMount',
                value: (function () {
                  var e = Object(m.a)(
                    u.a.mark(function e() {
                      return u.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (e.next = 2), this.connectToWallet()
                              case 2:
                                if (!e.sent) {
                                  e.next = 6
                                  break
                                }
                                return (e.next = 6), this.loadBlockchainData()
                              case 6:
                              case 'end':
                                return e.stop()
                            }
                        },
                        e,
                        this,
                      )
                    }),
                  )
                  return function () {
                    return e.apply(this, arguments)
                  }
                })(),
              },
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this
                  setInterval(function () {
                    return e.timer()
                  }, 1e3)
                },
              },
              {
                key: 'divideBy',
                value: function (e) {
                  return e / 1e18
                },
              },
              {
                key: 'loadBlockchainData',
                value: (function () {
                  var e = Object(m.a)(
                    u.a.mark(function e() {
                      var t,
                        a,
                        n,
                        s,
                        i,
                        c,
                        r,
                        l,
                        d,
                        m,
                        h,
                        p,
                        j,
                        b,
                        f,
                        O,
                        g,
                        N,
                        w,
                        k,
                        B,
                        C,
                        D = this
                      return u.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2),
                                  fetch(
                                    'https://api.coinlore.net/api/ticker/?id=2710',
                                  ).then(function (e) {
                                    return e.json()
                                  })
                                )
                              case 2:
                                return (
                                  (t = e.sent),
                                  this.setState({ usdPrice: t[0].price_usd }),
                                  (a = new x.a(
                                    x.a.givenProvider ||
                                      'https://data-seed-prebsc-1-s1.binance.org:8545',
                                  )),
                                  (e.next = 7),
                                  a.eth.net.getNetworkType()
                                )
                              case 7:
                                return (
                                  e.sent, (e.next = 10), a.eth.getAccounts()
                                )
                              case 10:
                                return (
                                  (n = e.sent),
                                  this.setState({ account: n[0] }),
                                  this.setState({
                                    connection:
                                      0 === n[0].length
                                        ? 'CONNECT'
                                        : this.state.account,
                                  }),
                                  (s = new a.eth.Contract(v, y)),
                                  this.setState({ contract: s }),
                                  (e.next = 17),
                                  s.methods.contractInfo().call()
                                )
                              case 17:
                                return (
                                  (i = e.sent),
                                  (c = i._total_deposited),
                                  i._total_users,
                                  (r = i._total_withdraw),
                                  (e.next = 21),
                                  s.methods.getBalance().call()
                                )
                              case 21:
                                return (
                                  (l = e.sent),
                                  this.setState({
                                    totalBNBDeposits: this.divideBy(c),
                                    smartContractBalance: this.divideBy(l),
                                    amountWithdrawnByMembers: this.divideBy(r),
                                  }),
                                  (e.next = 25),
                                  s.methods.userInfo(this.state.account).call()
                                )
                              case 25:
                                return (
                                  (d = e.sent),
                                  (m = d.deposit_amount),
                                  (h = d.deposit_time),
                                  (p = d.direct_bonus),
                                  (j = d.payouts),
                                  (b = d.upline),
                                  this.createCountdown(
                                    h,
                                    'nextIncomeCountdown',
                                    1,
                                  ),
                                  (e.next = 30),
                                  s.methods.payoutOf(this.state.account).call()
                                )
                              case 30:
                                return (
                                  (f = e.sent),
                                  (O = f.payout),
                                  (g = f.max_payout),
                                  this.setState({
                                    invitationLink: ''
                                      .concat(window.location.origin, '?r=')
                                      .concat(this.state.account),
                                    depositAmount: this.divideBy(m),
                                    incomeLimitRemain: this.divideBy(
                                      parseInt(g) - parseInt(j),
                                    ),
                                    dailyIncome: this.divideBy(O),
                                    directReferralIncome: this.divideBy(p),
                                    availableWithdrawal: this.divideBy(
                                      parseInt(O),
                                    ),
                                    referredBy: this.trimString(b),
                                    totalAmountOfDeposited: this.divideBy(m),
                                    totalAmountOfReceived: this.divideBy(j),
                                  }),
                                  this.setState({
                                    incomeLimitRemainUSD: (
                                      this.state.incomeLimitRemain *
                                      this.state.usdPrice
                                    ).toFixed(2),
                                    dailyIncomeUSD: (
                                      this.state.dailyIncome *
                                      this.state.usdPrice
                                    ).toFixed(2),
                                    directReferralIncomeUSD: (
                                      this.state.directReferralIncome *
                                      this.state.usdPrice
                                    ).toFixed(2),
                                    availableWithdrawalUSD: (
                                      this.state.availableWithdrawal *
                                      this.state.usdPrice
                                    ).toFixed(2),
                                    totalAmountOfDepositedUSD: (
                                      this.state.totalAmountOfDeposited *
                                      this.state.usdPrice
                                    ).toFixed(2),
                                    totalAmountOfReceivedUSD: (
                                      this.state.totalAmountOfReceived *
                                      this.state.usdPrice
                                    ).toFixed(2),
                                  }),
                                  (e.next = 36),
                                  s.methods.total_users().call()
                                )
                              case 36:
                                return (
                                  (N = e.sent),
                                  (e.next = 39),
                                  s.methods.users(this.state.account).call()
                                )
                              case 39:
                                return (
                                  (w = e.sent),
                                  (k = w.referrals),
                                  w.total_structure,
                                  (e.next = 43),
                                  s.methods
                                    .getDirectReferrals(this.state.account)
                                    .call()
                                )
                              case 43:
                                ;(B = e.sent),
                                  (C = B.addrs),
                                  this.setState({
                                    directReferrals: Object(o.a)(C),
                                  }),
                                  this.setState({
                                    personalInvitedPartners: k,
                                    totalCommunityParticipants: N,
                                  }),
                                  setTimeout(function () {
                                    document.getElementById(
                                      'odometer',
                                    ).innerHTML = (
                                      D.state.smartContractBalance *
                                      D.state.usdPrice
                                    ).toFixed()
                                  }, 1e3),
                                  this.setState({ loading: !1 })
                              case 49:
                              case 'end':
                                return e.stop()
                            }
                        },
                        e,
                        this,
                      )
                    }),
                  )
                  return function () {
                    return e.apply(this, arguments)
                  }
                })(),
              },
              {
                key: 'connectToWallet',
                value: function () {
                  return window.ethereum
                    ? ((window.web3 = new x.a(window.ethereum)),
                      window.ethereum.enable(),
                      !0)
                    : (this.showErrorMessage(
                        'Please install Binance Smart Chain compatible wallet like Metamask or Trust wallet to use this Dapps!',
                      ),
                      this.setState({ loading: !1 }),
                      !1)
                },
              },
              {
                key: 'deposit',
                value: (function () {
                  var e = Object(m.a)(
                    u.a.mark(function e(t) {
                      return u.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  this.setState({ loading: !0 }),
                                  (e.next = 3),
                                  this.state.contract.methods
                                    .deposit(t)
                                    .send({
                                      from: this.state.account,
                                      value: 1e18 * this.state.investment,
                                    })
                                    .then(function (e) {
                                      console.log('res'),
                                        console.log(e),
                                        console.log('res'),
                                        window.location.reload()
                                    })
                                    .catch(function (e) {
                                      console.log('error'),
                                        console.log(e),
                                        console.log('error')
                                    })
                                )
                              case 3:
                                this.setState({ loading: !1 })
                              case 4:
                              case 'end':
                                return e.stop()
                            }
                        },
                        e,
                        this,
                      )
                    }),
                  )
                  return function (t) {
                    return e.apply(this, arguments)
                  }
                })(),
              },
              {
                key: 'withdraw',
                value: (function () {
                  var e = Object(m.a)(
                    u.a.mark(function e() {
                      return u.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if ('---' !== this.state.unwithdrawnIncome) {
                                  e.next = 4
                                  break
                                }
                                this.showErrorMessage(
                                  'Please wait for the page to load.',
                                ),
                                  (e.next = 12)
                                break
                              case 4:
                                if (0 !== this.state.unwithdrawnIncome) {
                                  e.next = 8
                                  break
                                }
                                this.showErrorMessage(
                                  '0 available BNB for withdrawal.',
                                ),
                                  (e.next = 12)
                                break
                              case 8:
                                return (
                                  this.setState({ loading: !0 }),
                                  (e.next = 11),
                                  this.state.contract.methods
                                    .withdraw()
                                    .send({ from: this.state.account })
                                    .then(function (e) {
                                      console.log('res'),
                                        console.log(e),
                                        console.log('res'),
                                        window.location.reload()
                                    })
                                    .catch(function (e) {
                                      console.log('error'),
                                        console.log(e),
                                        console.log('error')
                                    })
                                )
                              case 11:
                                this.setState({ loading: !1 })
                              case 12:
                              case 'end':
                                return e.stop()
                            }
                        },
                        e,
                        this,
                      )
                    }),
                  )
                  return function () {
                    return e.apply(this, arguments)
                  }
                })(),
              },
              {
                key: 'toggleGuideToJoinVisibility',
                value: function () {
                  window.scrollTo(0, 0),
                    this.setState({
                      guideToJoinVisibility: !this.state.guideToJoinVisibility,
                    })
                },
              },
              {
                key: 'toggleCompensationPlanVisibility',
                value: function () {
                  window.scrollTo(0, 0),
                    this.setState({
                      compensationPlanVisibility: !this.state
                        .compensationPlanVisibility,
                    })
                },
              },
              {
                key: 'toggleDirectReferralsVisibility',
                value: function () {
                  window.scrollTo(0, 0),
                    this.setState({
                      directReferralsVisibility: !this.state
                        .directReferralsVisibility,
                    })
                },
              },
              {
                key: 'updateInvestment',
                value: function (e) {
                  this.setState({
                    investment: parseInt(e) + this.state.investment,
                  })
                },
              },
              {
                key: 'resetInvestment',
                value: function () {
                  this.setState({ investment: 0 })
                },
              },
              {
                key: 'validateInvestment',
                value: function () {
                  if (this.state.investment < 1)
                    this.showErrorMessage('Minimum invest 1 BNB.')
                  else if ('---' === this.state.incomeLimitRemain)
                    this.showErrorMessage('Please wait for the page to load.')
                  else if (this.state.incomeLimitRemain > 0)
                    this.showErrorMessage(
                      'Investment already exists / Use different wallet.',
                    )
                  else if (this.state.timerVisibility)
                    this.showErrorMessage(
                      'Please wait for the countdown to finish before joining.',
                    )
                  else {
                    var e = new URL(window.location.href).searchParams.get('r')
                    ;('null' !== e && null !== e) ||
                      (e = '0xd6aEC0b3E48608C9039B75183C01dc34cAd4cD04'), //wallet
                      this.toggleModalConfirmReferror(e)
                  }
                },
              },
              {
                key: 'trimString',
                value: function (e) {
                  return ''
                    .concat(e.substr(0, 7), '....')
                    .concat(e.substr(e.length - 7))
                },
              },
              {
                key: 'timeBetweenDates',
                value: function (e, t, a) {
                  var n = e,
                    s = new Date(new Date().toLocaleString('en-US')),
                    i = n.getTime() - s.getTime()
                  if (i <= 0) clearInterval(t)
                  else {
                    var c = Math.floor(i / 1e3),
                      r = Math.floor(c / 60),
                      o = Math.floor(r / 60)
                    Math.floor(o / 24)
                    ;(o %= 24),
                      (r %= 60),
                      (c %= 60),
                      this.setState(
                        Object(l.a)(
                          {},
                          a,
                          ''
                            .concat(
                              1 === ''.concat(o).length ? '0'.concat(o) : o,
                              ':',
                            )
                            .concat(
                              1 === ''.concat(r).length ? '0'.concat(r) : r,
                              ':',
                            )
                            .concat(
                              1 === ''.concat(c).length ? '0'.concat(c) : c,
                            ),
                        ),
                      )
                  }
                },
              },
              {
                key: 'createCountdown',
                value: function (e, t, a) {
                  var n,
                    s = this,
                    i = Math.round(
                      Math.abs(
                        (new Date(1e3 * e) -
                          new Date(new Date().toLocaleString('en-US'))) /
                          864e5,
                      ),
                    )
                  n = setInterval(function () {
                    s.timeBetweenDates(s.addDays(e, i + a), n, t)
                  }, 1e3)
                },
              },
              {
                key: 'addDays',
                value: function (e, t) {
                  var a = new Date(1e3 * e)
                  return a.setDate(a.getDate() + t), a
                },
              },
              {
                key: 'copyInvitationLink',
                value: function () {
                  var e = document.createElement('textarea')
                  ;(e.value = this.state.invitationLink),
                    e.setAttribute('readonly', ''),
                    (e.style = { position: 'absolute', left: '-9999px' }),
                    document.body.appendChild(e),
                    e.select(),
                    document.execCommand('copy'),
                    document.body.removeChild(e),
                    this.showErrorMessage('Copied Successfully')
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this
                  return this.state.guideToJoinVisibility
                    ? Object(n.jsx)(g, {
                        toggleGuideToJoinVisibility: this
                          .toggleGuideToJoinVisibility,
                      })
                    : this.state.compensationPlanVisibility
                    ? Object(n.jsx)(N, {
                        toggleCompensationPlanVisibility: this
                          .toggleCompensationPlanVisibility,
                      })
                    : this.state.directReferralsVisibility
                    ? Object(n.jsx)(C, {
                        toggleDirectReferralsVisibility: this
                          .toggleDirectReferralsVisibility,
                        directReferrals: this.state.directReferrals,
                      })
                    : Object(n.jsxs)('div', {
                        children: [
                          Object(n.jsx)(w, {
                            visibility: this.state.showModalPopUp,
                            toggleModal: function () {
                              e.toggleModalPopUp()
                            },
                            message: this.state.errorMessage,
                          }),
                          this.state.showModalConfirmReferror
                            ? Object(n.jsx)(k, {
                                visibility: this.state.showModalConfirmReferror,
                                toggleModal: function () {
                                  e.toggleModalConfirmReferror()
                                },
                                referror: this.state.referror,
                                invest: function (t) {
                                  return e.deposit(t)
                                },
                              })
                            : null,
                          this.state.loading ? Object(n.jsx)(B, {}) : null,
                          Object(n.jsx)('div', {
                            className: 'div-bg',
                            children: Object(n.jsxs)('div', {
                              className: 'container',
                              children: [
                                Object(n.jsxs)('div', {
                                  className: 'head',
                                  children: [
                                    Object(n.jsxs)('div', {
                                      className: 'head-nav',
                                      children: [
                                        Object(n.jsx)('a', {
                                          href: '#',
                                          children: Object(n.jsx)('img', {
                                            src: '/assets/logo-full.png',
                                            alt: 'BNB Chain logo',
                                            className: 'logo',
                                          }),
                                        }),
                                        Object(n.jsxs)('div', {
                                          className: 'head-nav-links',
                                          children: [
                                            Object(n.jsx)('a', {
                                              class: 'head-nav-links-a',
                                              href:
                                                'https://dappradar.com/binance-smart-chain/high-risk/',
                                              target: '_blank',
                                              children: 'DappRadar',
                                            }),
                                            Object(n.jsx)('a', {
                                              class: 'head-nav-links-a',
                                              href: '#',
                                              onClick: function () {
                                                return e.showErrorMessage(
                                                  'Coming Mid 2021!',
                                                )
                                              },
                                              children: 'SwapBNBC',
                                            }),
                                            Object(n.jsx)('a', {
                                              class: 'head-nav-links-a',
                                              href: '#',
                                              onClick: function () {
                                                return e.showErrorMessage(
                                                  'Coming Mid 2021!',
                                                )
                                              },
                                              children: 'BNB Chain Token',
                                            }),
                                            'CONNECT' === this.state.connection
                                              ? Object(n.jsx)('a', {
                                                  href: '#',
                                                  className:
                                                    'btn-normal btn-normal-long',
                                                  onClick: function () {
                                                    e.connectToWallet()
                                                  },
                                                  children: Object(n.jsx)('p', {
                                                    children: this.state
                                                      .connection,
                                                  }),
                                                })
                                              : Object(n.jsx)('center', {
                                                  children: Object(n.jsx)('a', {
                                                    className:
                                                      'head-nav-links-a',
                                                    title: this.state.account,
                                                    href: 'https://bscscan.com/address/'.concat(
                                                      this.state.account,
                                                    ),
                                                    target: '_blank',
                                                    children: this.trimString(
                                                      this.state.account,
                                                    ),
                                                  }),
                                                }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    Object(n.jsx)('p', {
                                      className: 'heading',
                                      children:
                                        'Earn 350% APY',
                                    }),
                                    Object(n.jsx)('p', {
                                      className: 'heading-2',
                                      children:
                                        'with BNB Chain on BSC!',
                                    }),
                                  ],
                                }),
                                Object(n.jsxs)('div', {
                                  children: [
                                    this.state.timerVisibility
                                      ? Object(n.jsx)('div', {
                                          className: 'countdown',
                                          children: Object(n.jsx)('div', {
                                            className: 'countdown-bg',
                                            children: Object(n.jsxs)('div', {
                                              className: 'countdown-container',
                                              children: [
                                                Object(n.jsx)('div', {
                                                  className: 'countdown-text',
                                                  children: Object(n.jsx)('p', {
                                                    children: 'Launching in...',
                                                  }),
                                                }),
                                                Object(n.jsxs)('div', {
                                                  className: 'countdown-timer',
                                                  children: [
                                                    Object(n.jsxs)('div', {
                                                      className: 'timer-item',
                                                      children: [
                                                        Object(n.jsx)('span', {
                                                          className:
                                                            'timer-number',
                                                          children: this.state
                                                            .countdown.days,
                                                        }),
                                                        Object(n.jsx)('span', {
                                                          className:
                                                            'timer-label',
                                                          children: 'DAYS',
                                                        }),
                                                      ],
                                                    }),
                                                    Object(n.jsx)('span', {
                                                      className: 'timer-colon',
                                                      children: ':',
                                                    }),
                                                    Object(n.jsxs)('div', {
                                                      className: 'timer-item',
                                                      children: [
                                                        Object(n.jsx)('span', {
                                                          className:
                                                            'timer-number',
                                                          children: this.state
                                                            .countdown.hours,
                                                        }),
                                                        Object(n.jsx)('span', {
                                                          className:
                                                            'timer-label',
                                                          children: 'HOURS',
                                                        }),
                                                      ],
                                                    }),
                                                    Object(n.jsx)('span', {
                                                      className:
                                                        'timer-colon timer-colon-visible',
                                                      children: ':',
                                                    }),
                                                    Object(n.jsxs)('div', {
                                                      className: 'timer-item',
                                                      children: [
                                                        Object(n.jsx)('span', {
                                                          className:
                                                            'timer-number',
                                                          children: this.state
                                                            .countdown.minutes,
                                                        }),
                                                        Object(n.jsx)('span', {
                                                          className:
                                                            'timer-label',
                                                          children: 'MINUTES',
                                                        }),
                                                      ],
                                                    }),
                                                    Object(n.jsx)('span', {
                                                      className: 'timer-colon',
                                                      children: ':',
                                                    }),
                                                    Object(n.jsxs)('div', {
                                                      className: 'timer-item',
                                                      children: [
                                                        Object(n.jsx)('span', {
                                                          className:
                                                            'timer-number',
                                                          children: this.state
                                                            .countdown.seconds,
                                                        }),
                                                        Object(n.jsx)('span', {
                                                          className:
                                                            'timer-label',
                                                          children: 'SECONDS',
                                                        }),
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                          }),
                                        })
                                      : null,
                                    Object(n.jsxs)('div', {
                                      className: this.state.timerVisibility
                                        ? 'blurred'
                                        : '',
                                      children: [
                                        Object(n.jsxs)('div', {
                                          className: 'first-div',
                                          children: [
                                            Object(n.jsxs)('div', {
                                              className: 'contract',
                                              children: [
                                                Object(n.jsxs)('div', {
                                                  className: 'balance',
                                                  children: [
                                                    Object(n.jsx)('div', {
                                                      className: 'currency',
                                                      children: '$',
                                                    }),
                                                    Object(n.jsx)('div', {
                                                      className:
                                                        'balance-value',
                                                      children: Object(
                                                        n.jsx,
                                                      )('div', {
                                                        id: 'odometer',
                                                        className: 'odometer',
                                                        children: '0',
                                                      }),
                                                    }),
                                                  ],
                                                }),
                                                Object(n.jsxs)('div', {
                                                  className: 'contract-card',
                                                  children: [
                                                    Object(n.jsxs)('div', {
                                                      className:
                                                        'contract-item',
                                                      children: [
                                                        Object(n.jsx)('p', {
                                                          className:
                                                            'contract-item-title',
                                                          children:
                                                            'Smart Contract Address',
                                                        }),
                                                        Object(n.jsx)('p', {
                                                          className:
                                                            'contract-item-value',
                                                          title: y,
                                                          children: Object(
                                                            n.jsx,
                                                          )('a', {
                                                            href: 'https://bscscan.com/address/'.concat(
                                                              y,
                                                            ),
                                                            target: '_blank',
                                                            children: Object(
                                                              n.jsx,
                                                            )('em', {
                                                              children: this.trimString(
                                                                y,
                                                              ),
                                                            }),
                                                          }),
                                                        }),
                                                      ],
                                                    }),
                                                    Object(n.jsxs)('div', {
                                                      className:
                                                        'contract-item',
                                                      children: [
                                                        Object(n.jsx)('p', {
                                                          className:
                                                            'contract-item-title',
                                                          children:
                                                            'Total BNB Deposits',
                                                        }),
                                                        Object(n.jsxs)('div', {
                                                          className:
                                                            'contract-item-value-div',
                                                          children: [
                                                            Object(n.jsx)('p', {
                                                              className:
                                                                'contract-item-value',
                                                              children: this
                                                                .state
                                                                .totalBNBDeposits,
                                                            }),
                                                            Object(n.jsx)('p', {
                                                              className:
                                                                'contract-item-label',
                                                              children: 'BNB',
                                                            }),
                                                          ],
                                                        }),
                                                      ],
                                                    }),
                                                    Object(n.jsxs)('div', {
                                                      className:
                                                        'contract-item',
                                                      children: [
                                                        Object(n.jsx)('p', {
                                                          className:
                                                            'contract-item-title',
                                                          children:
                                                            'Smart Contract Balance',
                                                        }),
                                                        Object(n.jsxs)('div', {
                                                          className:
                                                            'contract-item-value-div',
                                                          children: [
                                                            Object(n.jsx)('p', {
                                                              className:
                                                                'contract-item-value',
                                                              children: this
                                                                .state
                                                                .smartContractBalance,
                                                            }),
                                                            Object(n.jsx)('p', {
                                                              className:
                                                                'contract-item-label',
                                                              children: 'BNB',
                                                            }),
                                                          ],
                                                        }),
                                                      ],
                                                    }),
                                                    Object(n.jsxs)('div', {
                                                      className:
                                                        'contract-item',
                                                      children: [
                                                        Object(n.jsx)('p', {
                                                          className:
                                                            'contract-item-title',
                                                          children:
                                                            'Total Withdrawal by Members',
                                                        }),
                                                        Object(n.jsxs)('div', {
                                                          className:
                                                            'contract-item-value-div',
                                                          children: [
                                                            Object(n.jsx)('p', {
                                                              className:
                                                                'contract-item-value',
                                                              children: this
                                                                .state
                                                                .amountWithdrawnByMembers,
                                                            }),
                                                            Object(n.jsx)('p', {
                                                              className:
                                                                'contract-item-label',
                                                              children: 'BNB',
                                                            }),
                                                          ],
                                                        }),
                                                      ],
                                                    }),
                                                    Object(n.jsxs)('div', {
                                                      className:
                                                        'contract-item',
                                                      children: [
                                                        Object(n.jsx)('p', {
                                                          className:
                                                            'contract-item-title',
                                                          children:
                                                            'Referred by',
                                                        }),
                                                        Object(n.jsx)('p', {
                                                          className:
                                                            'contract-item-value',
                                                          children: Object(
                                                            n.jsx,
                                                          )('a', {
                                                            href: 'https://bscscan.com/address/'.concat(
                                                              this.state
                                                                .referredBy,
                                                            ),
                                                            target: '_blank',
                                                            children: Object(
                                                              n.jsx,
                                                            )('em', {
                                                              children: this
                                                                .state
                                                                .referredBy,
                                                            }),
                                                          }),
                                                        }),
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                            Object(n.jsxs)('div', {
                                              className: 'personal '.concat(
                                                this.state
                                                  .totalAmountOfDeposited > 0 &&
                                                  3.5 *
                                                    this.divideBy(
                                                      this.state
                                                        .totalAmountOfDeposited,
                                                    ) >
                                                    this.divideBy(
                                                      this.state
                                                        .totalAmountOfReceived,
                                                    ) &&
                                                  this.divideBy(
                                                    this.state
                                                      .totalAmountOfDeposited,
                                                  ) > 0
                                                  ? ''
                                                  : 'hide',
                                              ),
                                              children: [
                                                Object(n.jsxs)('div', {
                                                  className: 'timer',
                                                  children: [
                                                    Object(n.jsx)('p', {
                                                      className:
                                                        'contract-item-title',
                                                      children:
                                                        'Time left until next Income',
                                                    }),
                                                    Object(n.jsx)('p', {
                                                      className: 'timer-clock',
                                                      children: this.state
                                                        .nextIncomeCountdown,
                                                    }),
                                                  ],
                                                }),
                                                Object(n.jsxs)('div', {
                                                  className: 'info-container',
                                                  children: [
                                                    Object(n.jsxs)('div', {
                                                      className: 'info-card',
                                                      children: [
                                                        Object(n.jsx)('p', {
                                                          className:
                                                            'info-card-title',
                                                          children:
                                                            'Your Address',
                                                        }),
                                                        Object(n.jsx)('a', {
                                                          className:
                                                            'info-card-value button-highlight',
                                                          title: this.state
                                                            .account,
                                                          href: 'https://bscscan.com/address/'.concat(
                                                            this.state.account,
                                                          ),
                                                          target: '_blank',
                                                          children: this.trimString(
                                                            this.state.account,
                                                          ),
                                                        }),
                                                      ],
                                                    }),
                                                    Object(n.jsxs)('div', {
                                                      className: 'info-card',
                                                      children: [
                                                        Object(n.jsx)('p', {
                                                          className:
                                                            'info-card-title',
                                                          children:
                                                            'Referral Link',
                                                        }),
                                                        Object(n.jsx)('a', {
                                                          className:
                                                            'info-card-value button-highlight',
                                                          children: Object(
                                                            n.jsx,
                                                          )('p', {
                                                            onClick: function () {
                                                              e.copyInvitationLink()
                                                            },
                                                            children: 'Copy',
                                                          }),
                                                        }),
                                                      ],
                                                    }),
                                                    Object(n.jsxs)('div', {
                                                      className: 'info-card',
                                                      children: [
                                                        Object(n.jsx)('p', {
                                                          className:
                                                            'info-card-title',
                                                          children:
                                                            'Total Deposit',
                                                        }),
                                                        Object(n.jsxs)('div', {
                                                          className:
                                                            'contract-item-value-div info-card-value',
                                                          children: [
                                                            Object(n.jsx)('p', {
                                                              className: '',
                                                              children: this
                                                                .state
                                                                .totalAmountOfDeposited,
                                                            }),
                                                            Object(n.jsx)('p', {
                                                              className:
                                                                'contract-item-label',
                                                              children: 'BNB/$',
                                                            }),
                                                            Object(n.jsx)('p', {
                                                              className: '',
                                                              children: this
                                                                .state
                                                                .totalAmountOfDepositedUSD,
                                                            }),
                                                          ],
                                                        }),
                                                      ],
                                                    }),
                                                    Object(n.jsxs)('div', {
                                                      className: 'info-card',
                                                      children: [
                                                        Object(n.jsx)('p', {
                                                          className:
                                                            'info-card-title',
                                                          children:
                                                            'Daily Income 3.5%',
                                                        }),
                                                        Object(n.jsxs)('div', {
                                                          className:
                                                            'contract-item-value-div info-card-value',
                                                          children: [
                                                            Object(n.jsx)('p', {
                                                              className: '',
                                                              children: this
                                                                .state
                                                                .dailyIncome,
                                                            }),
                                                            Object(n.jsx)('p', {
                                                              className:
                                                                'contract-item-label',
                                                              children: 'BNB/$',
                                                            }),
                                                            Object(n.jsx)('p', {
                                                              className: '',
                                                              children: this
                                                                .state
                                                                .dailyIncomeUSD,
                                                            }),
                                                          ],
                                                        }),
                                                      ],
                                                    }),
                                                    Object(n.jsxs)('div', {
                                                      className: 'info-card',
                                                      children: [
                                                        Object(n.jsx)('p', {
                                                          className:
                                                            'info-card-title',
                                                          children:
                                                            'Referral Income',
                                                        }),
                                                        Object(n.jsxs)('div', {
                                                          className:
                                                            'contract-item-value-div info-card-value',
                                                          children: [
                                                            Object(n.jsx)('p', {
                                                              className: '',
                                                              children: this
                                                                .state
                                                                .directReferralIncome,
                                                            }),
                                                            Object(n.jsx)('p', {
                                                              className:
                                                                'contract-item-label',
                                                              children: 'BNB/$',
                                                            }),
                                                            Object(n.jsx)('p', {
                                                              className: '',
                                                              children: this
                                                                .state
                                                                .directReferralIncomeUSD,
                                                            }),
                                                          ],
                                                        }),
                                                      ],
                                                    }),
                                                    Object(n.jsxs)('div', {
                                                      className: 'info-card',
                                                      children: [
                                                        Object(n.jsx)('p', {
                                                          className:
                                                            'info-card-title',
                                                          children:
                                                            'Available Withdrawal',
                                                        }),
                                                        Object(n.jsxs)('div', {
                                                          className:
                                                            'contract-item-value-div info-card-value',
                                                          children: [
                                                            Object(n.jsx)('p', {
                                                              className: '',
                                                              children: this
                                                                .state
                                                                .availableWithdrawal,
                                                            }),
                                                            Object(n.jsx)('p', {
                                                              className:
                                                                'contract-item-label',
                                                              children: 'BNB/$',
                                                            }),
                                                            Object(n.jsx)('p', {
                                                              className: '',
                                                              children: this
                                                                .state
                                                                .availableWithdrawalUSD,
                                                            }),
                                                          ],
                                                        }),
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                                Object(n.jsx)('div', {
                                                  className: 'btn-container',
                                                  children: Object(n.jsx)('a', {
                                                    className:
                                                      'btn-normal btn-normal-long',
                                                    onClick: function () {
                                                      e.withdraw()
                                                    },
                                                    children: Object(n.jsx)(
                                                      'p',
                                                      { children: 'WITHDRAW' },
                                                    ),
                                                  }),
                                                }),
                                              ],
                                            }),
                                            Object(n.jsxs)('div', {
                                              className: 'form '.concat(
                                                this.state
                                                  .totalAmountOfDeposited > 0 &&
                                                  3.5 *
                                                    this.divideBy(
                                                      this.state
                                                        .totalAmountOfDeposited,
                                                    ) >
                                                    this.divideBy(
                                                      this.state
                                                        .totalAmountOfReceived,
                                                    ) &&
                                                  this.divideBy(
                                                    this.state
                                                      .totalAmountOfDeposited,
                                                  ) > 0
                                                  ? 'hide'
                                                  : '',
                                              ),
                                              children: [
                                                Object(n.jsxs)('div', {
                                                  className: 'input-container',
                                                  children: [
                                                    Object(n.jsx)('p', {
                                                      className: 'input-value',
                                                      children: this.state
                                                        .investment,
                                                    }),
                                                    Object(n.jsx)('label', {
                                                      className: 'input-label',
                                                      htmlFor: 'input-value',
                                                      children: 'BNB',
                                                    }),
                                                  ],
                                                }),
                                                Object(n.jsxs)('div', {
                                                  className: 'input-numbers',
                                                  children: [
                                                    Object(n.jsxs)('div', {
                                                      className:
                                                        'input-numbers-row',
                                                      children: [
                                                        Object(n.jsx)('a', {
                                                          className:
                                                            'input-numbers-button',
                                                          onClick: function () {
                                                            return e.updateInvestment(
                                                              1,
                                                            )
                                                          },
                                                          children: Object(
                                                            n.jsx,
                                                          )('p', {
                                                            children: '+ 1 BNB',
                                                          }),
                                                        }),
                                                        Object(n.jsx)('a', {
                                                          className:
                                                            'input-numbers-button',
                                                          onClick: function () {
                                                            return e.updateInvestment(
                                                              5,
                                                            )
                                                          },
                                                          children: Object(
                                                            n.jsx,
                                                          )('p', {
                                                            children: '+ 5 BNB',
                                                          }),
                                                        }),
                                                      ],
                                                    }),
                                                    Object(n.jsxs)('div', {
                                                      className:
                                                        'input-numbers-row',
                                                      children: [
                                                        Object(n.jsx)('a', {
                                                          className:
                                                            'input-numbers-button',
                                                          onClick: function () {
                                                            return e.updateInvestment(
                                                              10,
                                                            )
                                                          },
                                                          children: Object(
                                                            n.jsx,
                                                          )('p', {
                                                            children:
                                                              '+ 10 BNB',
                                                          }),
                                                        }),
                                                        Object(n.jsx)('a', {
                                                          className:
                                                            'input-numbers-button',
                                                          onClick: function () {
                                                            return e.updateInvestment(
                                                              30,
                                                            )
                                                          },
                                                          children: Object(
                                                            n.jsx,
                                                          )('p', {
                                                            children:
                                                              '+ 30 BNB',
                                                          }),
                                                        }),
                                                      ],
                                                    }),
                                                    Object(n.jsxs)('div', {
                                                      className:
                                                        'input-numbers-row',
                                                      children: [
                                                        Object(n.jsx)('a', {
                                                          className:
                                                            'input-numbers-button',
                                                          onClick: function () {
                                                            return e.updateInvestment(
                                                              50,
                                                            )
                                                          },
                                                          children: Object(
                                                            n.jsx,
                                                          )('p', {
                                                            children:
                                                              '+ 50 BNB',
                                                          }),
                                                        }),
                                                        Object(n.jsx)('a', {
                                                          className:
                                                            'input-numbers-button',
                                                          onClick: function () {
                                                            return e.updateInvestment(
                                                              100,
                                                            )
                                                          },
                                                          children: Object(
                                                            n.jsx,
                                                          )('p', {
                                                            children:
                                                              '+ 100 BNB',
                                                          }),
                                                        }),
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                                Object(n.jsxs)('div', {
                                                  className:
                                                    'input-numbers-confirm',
                                                  children: [
                                                    Object(n.jsx)('a', {
                                                      className: 'btn-reset',
                                                      onClick: function () {
                                                        return e.resetInvestment()
                                                      },
                                                      children: Object(
                                                        n.jsx,
                                                      )('p', {
                                                        children: 'RESET',
                                                      }),
                                                    }),
                                                    Object(n.jsx)('a', {
                                                      className: 'btn-normal',
                                                      onClick: function () {
                                                        return e.validateInvestment()
                                                      },
                                                      children: Object(
                                                        n.jsx,
                                                      )('p', {
                                                        children: 'JOIN',
                                                      }),
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        Object(n.jsxs)('div', {
                                          className: 'second-div',
                                          children: [
                                            Object(n.jsxs)('div', {
                                              className: 'small-card',
                                              children: [
                                                Object(n.jsx)('p', {
                                                  className: 'small-card-title',
                                                  children: 'Statistics',
                                                }),
                                                Object(n.jsxs)('div', {
                                                  className: 'info-card card-2',
                                                  children: [
                                                    Object(n.jsx)('p', {
                                                      className:
                                                        'info-card-title card-2-title',
                                                      children:
                                                        '350% Income Limit',
                                                    }),
                                                    Object(n.jsxs)('div', {
                                                      className:
                                                        'contract-item-value-div card-2-value info-card-value',
                                                      children: [
                                                        Object(n.jsx)('p', {
                                                          className: '',
                                                          children: this.state
                                                            .incomeLimitRemain,
                                                        }),
                                                        Object(n.jsx)('p', {
                                                          className:
                                                            'contract-item-label',
                                                          children: 'BNB/$',
                                                        }),
                                                        Object(n.jsx)('p', {
                                                          className: '',
                                                          children: this.state
                                                            .incomeLimitRemainUSD,
                                                        }),
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                                Object(n.jsxs)('div', {
                                                  className: 'info-card card-2',
                                                  children: [
                                                    Object(n.jsx)('p', {
                                                      className:
                                                        'info-card-title card-2-title',
                                                      children:
                                                        'Total Withdrawal',
                                                    }),
                                                    Object(n.jsxs)('div', {
                                                      className:
                                                        'contract-item-value-div card-2-value info-card-value',
                                                      children: [
                                                        Object(n.jsx)('p', {
                                                          className: '',
                                                          children: this.state
                                                            .totalAmountOfReceived,
                                                        }),
                                                        Object(n.jsx)('p', {
                                                          className:
                                                            'contract-item-label',
                                                          children: 'BNB/$',
                                                        }),
                                                        Object(n.jsx)('p', {
                                                          className: '',
                                                          children: this.state
                                                            .totalAmountOfReceivedUSD,
                                                        }),
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                            Object(n.jsxs)('div', {
                                              className: 'small-card',
                                              children: [
                                                Object(n.jsx)('p', {
                                                  className: 'small-card-title',
                                                  children: 'Community',
                                                }),
                                                Object(n.jsxs)('div', {
                                                  className: 'info-card card-2',
                                                  children: [
                                                    Object(n.jsx)('p', {
                                                      className:
                                                        'info-card-title card-2-title',
                                                      children:
                                                        'Direct Referrals',
                                                    }),
                                                    Object(n.jsx)('a', {
                                                      className:
                                                        'info-card-value card-2-value',
                                                      onClick: function () {
                                                        return e.toggleDirectReferralsVisibility()
                                                      },
                                                      children: this.state
                                                        .personalInvitedPartners,
                                                    }),
                                                  ],
                                                }),
                                                Object(n.jsxs)('div', {
                                                  className: 'info-card card-2',
                                                  children: [
                                                    Object(n.jsx)('p', {
                                                      className:
                                                        'info-card-title card-2-title',
                                                      children:
                                                        'Total Community',
                                                    }),
                                                    Object(n.jsx)('p', {
                                                      className:
                                                        'info-card-value card-2-value',
                                                      children: this.state
                                                        .totalCommunityParticipants,
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                Object(n.jsxs)('div', {
                                  className: 'third-div',
                                  children: [
                                    Object(n.jsx)('a', {
                                      href: 'https://t.me/tronglasschat',
                                      target: '_blank',
                                      className: 'btn-normal btn-super-long',
                                      children: Object(n.jsx)('p', {
                                        children: 'Telegram',
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                        ],
                      })
                },
              },
            ]),
            a
          )
        })(s.Component),
        M = function (e) {
          e &&
            e instanceof Function &&
            a
              .e(3)
              .then(a.bind(null, 480))
              .then(function (t) {
                var a = t.getCLS,
                  n = t.getFID,
                  s = t.getFCP,
                  i = t.getLCP,
                  c = t.getTTFB
                a(e), n(e), s(e), i(e), c(e)
              })
        }
      r.a.render(
        Object(n.jsx)(i.a.StrictMode, { children: Object(n.jsx)(D, {}) }),
        document.getElementById('root'),
      ),
        M()
    },
  },
  [[476, 1, 2]],
])
//# sourceMappingURL=main.b2cae858.chunk.js.map
