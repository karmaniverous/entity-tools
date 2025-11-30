### Changelog

All notable changes to this project will be documented in this file. Dates are displayed in UTC.

#### [0.8.0](https://github.com/karmaniverous/entity-tools/compare/0.7.1...0.8.0)

- updateRecord -&gt; updateItem [`b048fae`](https://github.com/karmaniverous/entity-tools/commit/b048fae6ca5b8cd8b3390fea2cbfab88f9598175)
- updated docs [`b1a10eb`](https://github.com/karmaniverous/entity-tools/commit/b1a10eb78f07934418c86ce5307e7bfd406d76d3)
- pruned todo [`f887ac8`](https://github.com/karmaniverous/entity-tools/commit/f887ac82f7f54ee9dcbeb7e9afc1221e768db12a)
- stan lint warnings [`f7735c1`](https://github.com/karmaniverous/entity-tools/commit/f7735c1b29bf106ade371ebb1446a6dbcd86fdec)

#### [0.7.1](https://github.com/karmaniverous/entity-tools/compare/0.7.0...0.7.1)

> 17 November 2025

- updated dependencies [`f92669d`](https://github.com/karmaniverous/entity-tools/commit/f92669d16d2f1b8ac04ce6e4355fa3c696e1f47f)
- chore: release v0.7.1 [`7bac475`](https://github.com/karmaniverous/entity-tools/commit/7bac4758512bb06e6d795eac8b0e559a605d6130)

#### [0.7.0](https://github.com/karmaniverous/entity-tools/compare/0.6.9...0.7.0)

> 16 November 2025

- docs: add TranscodedType and defineSortOrder to plan [`3a7775d`](https://github.com/karmaniverous/entity-tools/commit/3a7775d67d071f3a3f4dfd6642fbee9309057809)
- interop imports [`a586a12`](https://github.com/karmaniverous/entity-tools/commit/a586a12ec2667d8546dce065b8ace011071b00c6)
- feat: canonical transcode registry, builder, and helpers [`acb0706`](https://github.com/karmaniverous/entity-tools/commit/acb07066bff39402d2c76eb95003104e2408a551)
- chore: release v0.7.0 [`295a4ed`](https://github.com/karmaniverous/entity-tools/commit/295a4eda0242d388c06108d36c886d8813d28578)
- refactor: requirements for inference-first transcodes [`7754163`](https://github.com/karmaniverous/entity-tools/commit/77541631845fe99f953e93d7dde87f6678ac2531)
- fix(types): relax defineTranscodes bound; enforce encode presence [`f6b248b`](https://github.com/karmaniverous/entity-tools/commit/f6b248b6dbc5802004d125d8a21ffe4c85616c0c)
- test(docs): export helper types and add type/runtime tests [`f3c8674`](https://github.com/karmaniverous/entity-tools/commit/f3c86744cc3aa629f90f66100f576855dfc21347)
- feat(types): branded error shapes for encode/decode agreement + docs [`183e6ca`](https://github.com/karmaniverous/entity-tools/commit/183e6cad3078ccc8166a56d8a04c5b887dfe833d)
- fix: builder overloads, defaultTranscodes typing, and knip cleanup [`f59f449`](https://github.com/karmaniverous/entity-tools/commit/f59f4491620c13de5742600d322281a33aad0e66)
- fix: restore tsd checks and lint; exclude index signatures [`1a08dac`](https://github.com/karmaniverous/entity-tools/commit/1a08dac38f22622dfac1b08dfebbb585ac2185ff)
- docs(interop): response for entity-manager — inference-first transcodes [`3b0bcd0`](https://github.com/karmaniverous/entity-tools/commit/3b0bcd08098cc3d17a2f37b7fd952f2c5eda905d)
- test(tsd): fix type assertions in test-d and normalize assertions to concrete values [`7a8f294`](https://github.com/karmaniverous/entity-tools/commit/7a8f294ec8a7d50e045b088cef0991ef1ac4e6cb)
- fix: simplify typed overload and align default call [`63f538a`](https://github.com/karmaniverous/entity-tools/commit/63f538aa96ac2e62c086159579c8b840a956d192)
- fix: precise key selection + inference overload binding [`8ea0005`](https://github.com/karmaniverous/entity-tools/commit/8ea000574b74ffd7cefb7ce6875fb58bfcee6957)
- updated docs [`8070420`](https://github.com/karmaniverous/entity-tools/commit/8070420b04aa007569511e38e643c6af969b2245)
- fix: restore typed-first overload to unblock defaults [`91c51d5`](https://github.com/karmaniverous/entity-tools/commit/91c51d5bcbeafcfc0b783a88378a02759032bcf4)
- feat(types): make defineTranscodes inference-first only [`ee846b2`](https://github.com/karmaniverous/entity-tools/commit/ee846b2d825ce057afd6c6fbafc0c92999022872)
- fix: align agreement bound with decode-only overload [`46a7849`](https://github.com/karmaniverous/entity-tools/commit/46a78491824913eedc2d05d8e7be9881849a484a)
- fix: bind literal calls to agreement-checked overload [`5a2c22f`](https://github.com/karmaniverous/entity-tools/commit/5a2c22f4b71f01f16da6b0ffa4b182b533805bfd)
- test(tsd): fix type assertions and derive registry from spec; add default registry test [`fe1e5fe`](https://github.com/karmaniverous/entity-tools/commit/fe1e5fe8eed56fa7ffe53b218be4acc539b326cf)
- chore(ci): fix docs/knip warnings for branded error types [`75cd7db`](https://github.com/karmaniverous/entity-tools/commit/75cd7db65f407d991d15dfc34f9377d6f814142d)
- fix: tsd failures in PropertiesNotOfType and TRFrom [`e5fbd9b`](https://github.com/karmaniverous/entity-tools/commit/e5fbd9b7ba3a9ac277f4195a86edbb6a4e3defda)
- chore(typecheck): make tsd run against tests/types; add property-selection tsd tests [`d0fa14e`](https://github.com/karmaniverous/entity-tools/commit/d0fa14eedf16145c756160a227d1886910c768fd)
- test(tsd): finalize union assertions and inference pattern; remove boundary call [`69a931c`](https://github.com/karmaniverous/entity-tools/commit/69a931c7bf8106fba900252a812801e7c23fef98)
- docs: tighten requirements and plan; add project prompt [`77266d7`](https://github.com/karmaniverous/entity-tools/commit/77266d7a14b24825ad9884dbf082acec01dfaa4a)
- fix: enforce agreement on typed overload using spec shape [`55b444e`](https://github.com/karmaniverous/entity-tools/commit/55b444e3cb9850623576facf7b64eb8f46129733)
- test(tsd): stabilize inference-overload boundary and union checks in test-d [`3222f99`](https://github.com/karmaniverous/entity-tools/commit/3222f990104bc512c94ae2e49188adba51222144)
- fix: bind defaultTranscodes to typed overload explicitly [`923dca2`](https://github.com/karmaniverous/entity-tools/commit/923dca270d22b0891934ea37d0545c6feeda91e6)
- docs(api): export EncodeDecodeAgreement; add test plan [`aeabe37`](https://github.com/karmaniverous/entity-tools/commit/aeabe37ac20ecdd2185c85ef01a354b380d7a42d)
- fix(tsd): move @ts-expect-error to offending node [`89f4226`](https://github.com/karmaniverous/entity-tools/commit/89f4226760b074e3c2b53aafb0cf7ea0a657ccfd)

#### [0.6.9](https://github.com/karmaniverous/entity-tools/compare/0.6.8...0.6.9)

> 25 October 2025

- test: migrate from Mocha/NYC to Vitest [`b2363de`](https://github.com/karmaniverous/entity-tools/commit/b2363de6e35f9ee757509d82bb81999e11892e37)
- updated docs [`2557033`](https://github.com/karmaniverous/entity-tools/commit/2557033fee81c947d4bc7ae7ef9a901dfa559446)
- chore: remove unused mocha/nyc deps; add vitest keyword [`813c8fb`](https://github.com/karmaniverous/entity-tools/commit/813c8fba8c40ff60174141e7ca259777de6b6bdd)
- chore(eslint): migrate to flat TS config (eslint.config.ts) [`1d3cfff`](https://github.com/karmaniverous/entity-tools/commit/1d3cfffe6641c6cc9505dfb04f54e50328063db7)
- chore(eslint): run typed rules on all TS files incl. tests [`484f8b1`](https://github.com/karmaniverous/entity-tools/commit/484f8b199dc08bc961304f87da6855813bcdc0ca)
- types(tsd): adopt tsd for type testing; ignore rollup TS defaulting warning [`3529372`](https://github.com/karmaniverous/entity-tools/commit/35293724565be133fbc89d69f6479cb63f2045f0)
- updated vitest [`7def520`](https://github.com/karmaniverous/entity-tools/commit/7def520a8781a00cf25f74df8a3782e3bfe9d251)
- types/lint: fix rollup types and exclude cache/tsd tests from ESLint [`c9f6695`](https://github.com/karmaniverous/entity-tools/commit/c9f66951f725a0b2a4c3dc9a0d60d80a0ba7dada)
- types: fix remaining TS errors after widening tsconfig include [`d5dfe11`](https://github.com/karmaniverous/entity-tools/commit/d5dfe1187c310ac6720c2f21f3ac44cdc427aadf)
- test/knip/stan: add Vitest type tests; fix knip and build warn filter [`f7f55a0`](https://github.com/karmaniverous/entity-tools/commit/f7f55a0d8a28ef9abba9417cb91970e9cb7542aa)
- chore(eslint): integrate Vitest ESLint plugin [`ffee602`](https://github.com/karmaniverous/entity-tools/commit/ffee6028acc47dd183139b4af0df59c349a4035c)
- docs: expand README with exports and examples; fix conditionalize export [`dc699fb`](https://github.com/karmaniverous/entity-tools/commit/dc699fb69496d283ef1ba6f0b2b0bf05f4672b40)
- fix(lint,typecheck): allow chai chainers; run tsd correctly [`1a3ed22`](https://github.com/karmaniverous/entity-tools/commit/1a3ed2212734ff7d13ec4b9852c34d0498eab6e9)
- chore: release v0.6.9 [`fccff06`](https://github.com/karmaniverous/entity-tools/commit/fccff06d59cc6d6ec6780e25e584d3f427a8bfa2)
- docs update [`3500148`](https://github.com/karmaniverous/entity-tools/commit/350014878c47ffd93bcc555f47c3a901a5f33e85)
- fix(types+tsd): stabilize MutuallyExclusive and adjust tests [`f45f82d`](https://github.com/karmaniverous/entity-tools/commit/f45f82d5b1490e520ff69cff36ae2e36bf2dca03)
- test/build: stabilize Vitest migration; fix rollup & TS [`563413a`](https://github.com/karmaniverous/entity-tools/commit/563413a3b4d15835480357d93708a450497f9549)
- test(types): refactor MutuallyExclusive tests to compile-time asserts [`3cf33fe`](https://github.com/karmaniverous/entity-tools/commit/3cf33fe71dcd26b770aa4e53256978da119bcc14)
- chore(types): remove Chai types; move type-only test out of Vitest [`4c52341`](https://github.com/karmaniverous/entity-tools/commit/4c52341c291fef5bc224f6f25bf2aff7c0c1090e)
- chore(eslint): scope typed rules to src; disable for tests [`241ed95`](https://github.com/karmaniverous/entity-tools/commit/241ed9553356b2a071ac7bb449571116ea970e57)
- fix(tsd): add default test-d harness to discover type tests [`448b3b6`](https://github.com/karmaniverous/entity-tools/commit/448b3b6546f1b54905a7b28e448a76de74800b48)
- build(rollup): make TS config JS-compatible per template [`f1ec2e4`](https://github.com/karmaniverous/entity-tools/commit/f1ec2e49e37f96ded55e0a2968d45639a75de773)
- build(rollup): remove JSON import assertion; fix DTS plugins array [`92b223c`](https://github.com/karmaniverous/entity-tools/commit/92b223cd4e1bd2f63dd5e3e034f329485833c279)
- fix(typecheck): run tsd on tests/types [`f35886e`](https://github.com/karmaniverous/entity-tools/commit/f35886efeac9249476013d7b5d3f42af8760e62e)
- chore(eslint): exclude tests from typed rules; remove disableTypeChecked [`84878f6`](https://github.com/karmaniverous/entity-tools/commit/84878f61fa01ac9863df3468760e7998a9696bca)
- docs(todo): remove resolved build item; confirm TS Rollup config [`d31b50a`](https://github.com/karmaniverous/entity-tools/commit/d31b50a6fa61cacf9df19f209892cc63f9693f11)
- added google drive sync [`290d544`](https://github.com/karmaniverous/entity-tools/commit/290d544b5185b25630e04151b05d4eb6bddd365e)
- build(stan): warnPattern now ignores plugin defaulting notice, keeps other warnings [`1d648b0`](https://github.com/karmaniverous/entity-tools/commit/1d648b0f82501050e9e5c00f34eb2a81eac54c3e)
- build(rollup): apply TS plugin to rollup.config.ts [`832b439`](https://github.com/karmaniverous/entity-tools/commit/832b4393b33a08ef240b5bd5031efc33595814ce)
- build(rollup): compile TS config via @rollup/plugin-typescript [`e6bdb3a`](https://github.com/karmaniverous/entity-tools/commit/e6bdb3ac5e927d57d0b9961090e532c2addb77e0)
- chore(knip): ignore tsd type-test files [`c0a0120`](https://github.com/karmaniverous/entity-tools/commit/c0a01205b413ff03fb95a03fcde9b1f664106a1c)

#### [0.6.8](https://github.com/karmaniverous/entity-tools/compare/0.6.7...0.6.8)

> 14 November 2024

- added updateRecord [`efdb537`](https://github.com/karmaniverous/entity-tools/commit/efdb5377c1d82b18db434ae5e2212c7a89ca052a)
- chore: release v0.6.8 [`8e4e41f`](https://github.com/karmaniverous/entity-tools/commit/8e4e41f9083a8bebd0bf2f0ac8d2fa01ba84520b)

#### [0.6.7](https://github.com/karmaniverous/entity-tools/compare/0.6.6...0.6.7)

> 14 November 2024

- chore: release v0.6.7 [`59df33c`](https://github.com/karmaniverous/entity-tools/commit/59df33c1702604fa6f9dd5db37d11a602b35c968)
- updated dependencies [`19bc494`](https://github.com/karmaniverous/entity-tools/commit/19bc4948962742e4184485de87068269380e803d)
- added MakeUpdatable [`4e4d2f9`](https://github.com/karmaniverous/entity-tools/commit/4e4d2f9fb0c4c7417cd96853130d4c882aa97cd9)

#### [0.6.6](https://github.com/karmaniverous/entity-tools/compare/0.6.5...0.6.6)

> 14 November 2024

- updated docs [`17fa846`](https://github.com/karmaniverous/entity-tools/commit/17fa846813204649ef79956161ef95f0591d600f)
- chore: release v0.6.6 [`0c14854`](https://github.com/karmaniverous/entity-tools/commit/0c14854aacd83ba27bb4f24b6968cc108a1cc7de)
- updated docs [`662e429`](https://github.com/karmaniverous/entity-tools/commit/662e429a64ea666369b3d29ff854549d0af9debb)
- added MakeRequired [`f04fd6f`](https://github.com/karmaniverous/entity-tools/commit/f04fd6f8c816539967c3d9bbeb42fdc2c1378c0d)
- updated comments [`cd2ffc0`](https://github.com/karmaniverous/entity-tools/commit/cd2ffc06555bd430af2945a547ba7a18a928620b)
- updated docs [`174b1a8`](https://github.com/karmaniverous/entity-tools/commit/174b1a8b3da4772fd756766d38e78b8dedfc1282)

#### [0.6.5](https://github.com/karmaniverous/entity-tools/compare/0.6.4...0.6.5)

> 12 November 2024

- chore: release v0.6.5 [`0be7131`](https://github.com/karmaniverous/entity-tools/commit/0be7131c3532aae4d8213db6861ed1631f023e13)
- updated MakeOptional [`edeccae`](https://github.com/karmaniverous/entity-tools/commit/edeccaec012414538a939c78563f0a7c1f87b35e)

#### [0.6.4](https://github.com/karmaniverous/entity-tools/compare/0.6.3...0.6.4)

> 12 November 2024

- chore: release v0.6.4 [`d06b88e`](https://github.com/karmaniverous/entity-tools/commit/d06b88ef4a814e1d650cbe321e52eb55ffdbfc21)
- Updated MakeOptional [`832c99b`](https://github.com/karmaniverous/entity-tools/commit/832c99b2afb4b80cce00716b0ca6db5d99e8b605)

#### [0.6.3](https://github.com/karmaniverous/entity-tools/compare/0.6.2...0.6.3)

> 12 November 2024

- chore: release v0.6.3 [`5810d0c`](https://github.com/karmaniverous/entity-tools/commit/5810d0c2097853e63d9ab0a077f39b45cf9c4823)
- updated docs [`85ace78`](https://github.com/karmaniverous/entity-tools/commit/85ace78cdb253ef5ff5210612b77f4e0c95f6c82)
- replaced record&lt;string, unknown&gt; with object [`a0516f1`](https://github.com/karmaniverous/entity-tools/commit/a0516f1c50fd3f3ba0127623a127ec0c1a9013cb)

#### [0.6.2](https://github.com/karmaniverous/entity-tools/compare/0.6.1...0.6.2)

> 12 November 2024

- chore: release v0.6.2 [`41ee535`](https://github.com/karmaniverous/entity-tools/commit/41ee535719375af8a62f2f7fafe9ef8ad5b4f602)
- updated dependencies [`448e661`](https://github.com/karmaniverous/entity-tools/commit/448e661eb8e77b2571e58cef426ad31b72628014)
- Added ReplaceKey & ReplaceKeys [`983a499`](https://github.com/karmaniverous/entity-tools/commit/983a499f8e740684e302a223c0ef8eed54311277)

#### [0.6.1](https://github.com/karmaniverous/entity-tools/compare/0.6.0...0.6.1)

> 11 November 2024

- updated docs [`1ffa262`](https://github.com/karmaniverous/entity-tools/commit/1ffa262513a0a175f665c6f4599be78846aad830)
- chore: release v0.6.1 [`6dfc2d5`](https://github.com/karmaniverous/entity-tools/commit/6dfc2d5cdcab2121c9bb879cdf61ab70be77500f)
- updated docs [`a1b93b1`](https://github.com/karmaniverous/entity-tools/commit/a1b93b17c794f030283b0f38a8a4cc9585d61886)

#### [0.6.0](https://github.com/karmaniverous/entity-tools/compare/0.5.0...0.6.0)

> 11 November 2024

- updated docs [`019989a`](https://github.com/karmaniverous/entity-tools/commit/019989a0a8fcc12dbcc5354adc8495b25fe47a08)
- chore: release v0.6.0 [`6a08fc8`](https://github.com/karmaniverous/entity-tools/commit/6a08fc831dd1bff16873b21d8559dee6d9934771)
- Abstracted functions back from Entity Manager [`e720b1d`](https://github.com/karmaniverous/entity-tools/commit/e720b1d5cf34c818502fc1374a9fb8377a058700)
- bugfix [`f6ec529`](https://github.com/karmaniverous/entity-tools/commit/f6ec529e34676391678d842643536e2b11ae5a52)

#### [0.5.0](https://github.com/karmaniverous/entity-tools/compare/0.4.6...0.5.0)

> 10 November 2024

- chore: release v0.5.0 [`4059f3c`](https://github.com/karmaniverous/entity-tools/commit/4059f3c82e03e22ca614bd974dbd22839b34afdf)
- Added NotNever type [`b171e97`](https://github.com/karmaniverous/entity-tools/commit/b171e97bccab1a48e61cfce396d8c2d6cacafd6f)

#### [0.4.6](https://github.com/karmaniverous/entity-tools/compare/0.4.5...0.4.6)

> 10 November 2024

- chore: release v0.4.6 [`7b12cde`](https://github.com/karmaniverous/entity-tools/commit/7b12cde806f96513e962bf3734ac548fdf7a9664)
- Constrained TranscodableProperties to strings [`1cc0cca`](https://github.com/karmaniverous/entity-tools/commit/1cc0cca6aa4cdf6cabbece75eccb5cce6316ec4c)

#### [0.4.5](https://github.com/karmaniverous/entity-tools/compare/0.4.4...0.4.5)

> 9 November 2024

- Added EntityMap & rationalized types [`cfdcbd6`](https://github.com/karmaniverous/entity-tools/commit/cfdcbd672cd5946cdd3dba2844ce1695df134bf0)
- chore: release v0.4.5 [`1dbb1ed`](https://github.com/karmaniverous/entity-tools/commit/1dbb1ed34d054cca19d21b784da02614d9daec27)

#### [0.4.4](https://github.com/karmaniverous/entity-tools/compare/0.4.3...0.4.4)

> 4 November 2024

- chore: release v0.4.4 [`73a8375`](https://github.com/karmaniverous/entity-tools/commit/73a8375eacc6057607cd5295ff0a93d04ce1e1e5)
- added MakeOptional [`0f46822`](https://github.com/karmaniverous/entity-tools/commit/0f46822f99e1f49624a09f6a5ba607370824ebd8)

#### [0.4.3](https://github.com/karmaniverous/entity-tools/compare/0.4.2...0.4.3)

> 3 November 2024

- updated default transcodes [`94e200b`](https://github.com/karmaniverous/entity-tools/commit/94e200b1df1a5f418608c0f06c6ff5307f2104ec)
- chore: release v0.4.3 [`63152c1`](https://github.com/karmaniverous/entity-tools/commit/63152c13f8b265323547ea8a3622def166a97b1c)

#### [0.4.2](https://github.com/karmaniverous/entity-tools/compare/0.4.1...0.4.2)

> 30 October 2024

- chore: release v0.4.2 [`2535439`](https://github.com/karmaniverous/entity-tools/commit/25354391f329434922c4778c2546cdb76cb50c9e)
- updated docs [`f85a7ec`](https://github.com/karmaniverous/entity-tools/commit/f85a7ecc144dfc6b856eec4d2b8996198ea459c4)

#### [0.4.1](https://github.com/karmaniverous/entity-tools/compare/0.4.0...0.4.1)

> 29 October 2024

- chore: release v0.4.1 [`7f2f524`](https://github.com/karmaniverous/entity-tools/commit/7f2f524795e1e385b59e82053275611f4fab15ee)
- updated docs [`fe0ed97`](https://github.com/karmaniverous/entity-tools/commit/fe0ed972866f0564d5ea7936d6c7fb4e9b1d7342)

#### [0.4.0](https://github.com/karmaniverous/entity-tools/compare/0.3.1...0.4.0)

> 29 October 2024

- chore: release v0.4.0 [`3731492`](https://github.com/karmaniverous/entity-tools/commit/3731492ee0a76593168574626790dd491a548ce4)
- added WithRequiredAndNonNullable [`13a50f2`](https://github.com/karmaniverous/entity-tools/commit/13a50f2112cd4de3840cc60137f71a9fd0c35d58)

#### [0.3.1](https://github.com/karmaniverous/entity-tools/compare/0.3.0...0.3.1)

> 9 October 2024

- chore: release v0.3.1 [`3e4b05c`](https://github.com/karmaniverous/entity-tools/commit/3e4b05c503c285ee78f1b38f26c686e84290388f)
- constrain PropertiesOfType & PropertiesNotOfType to string [`ac797df`](https://github.com/karmaniverous/entity-tools/commit/ac797dfaa7c7d5630a72a95060ead1609db0c7ef)

#### [0.3.0](https://github.com/karmaniverous/entity-tools/compare/0.2.5...0.3.0)

> 8 October 2024

- updated dependencies [`55e796d`](https://github.com/karmaniverous/entity-tools/commit/55e796d9c532f0b466aca428aff334773d9cfcd2)
- chore: release v0.3.0 [`a70c7e7`](https://github.com/karmaniverous/entity-tools/commit/a70c7e7c0a93100777c229df806ffafb8f1a573d)
- created PartialTranscodable [`0adcb59`](https://github.com/karmaniverous/entity-tools/commit/0adcb595e5c2b294fbf128d80364d4d09e907d69)

#### [0.2.5](https://github.com/karmaniverous/entity-tools/compare/0.2.4...0.2.5)

> 7 October 2024

- updated dependencies [`feab0fc`](https://github.com/karmaniverous/entity-tools/commit/feab0fc9d117d0b10d6994134062e34c448ccbd7)
- chore: release v0.2.5 [`08ceb03`](https://github.com/karmaniverous/entity-tools/commit/08ceb031a0775801d79245731111e905d5bff289)
- updated rollup config [`a5e360f`](https://github.com/karmaniverous/entity-tools/commit/a5e360f05cfb877abf963cc92e34f0d4506176ec)

#### [0.2.4](https://github.com/karmaniverous/entity-tools/compare/0.2.3...0.2.4)

> 7 October 2024

- updated docs [`6b2f68a`](https://github.com/karmaniverous/entity-tools/commit/6b2f68a9af2aeb5b634e7ed0191f128a3a0274d0)
- chore: release v0.2.4 [`86fcb20`](https://github.com/karmaniverous/entity-tools/commit/86fcb20c70b31f9437a886ebe81371435121b241)
- improved rollup plugin handling [`e9f5792`](https://github.com/karmaniverous/entity-tools/commit/e9f5792da2580960fab765a3888e04f1ecba24d9)

#### [0.2.3](https://github.com/karmaniverous/entity-tools/compare/0.2.1...0.2.3)

> 17 September 2024

- updated docs [`d3a7c2c`](https://github.com/karmaniverous/entity-tools/commit/d3a7c2cdf49c7a1f8bfa441a048f58ba4a740414)
- chore: release v0.2.3 [`7174021`](https://github.com/karmaniverous/entity-tools/commit/7174021ef68f42ef71f4c10b6bcd6bf985c49ec5)
- updated release script [`c7f17e8`](https://github.com/karmaniverous/entity-tools/commit/c7f17e81ee2bc11edb5331f17a79c19237de6213)
- updated release script [`163860c`](https://github.com/karmaniverous/entity-tools/commit/163860c6ec09e8c69aaf001d882a37e0e6c5ed14)

#### [0.2.1](https://github.com/karmaniverous/entity-tools/compare/0.2.0...0.2.1)

> 17 September 2024

- added timestamp support [`1af8269`](https://github.com/karmaniverous/entity-tools/commit/1af8269c37bf56e2602d30f19b6db484799c7f3d)
- improved exactify [`6f4463c`](https://github.com/karmaniverous/entity-tools/commit/6f4463c3dd2c07a716cfef0427778b85f1625391)
- chore: release v0.2.1 [`3fe8422`](https://github.com/karmaniverous/entity-tools/commit/3fe8422e17c69b190ce586c085be2b61f49e91ca)
- typo [`bac76a0`](https://github.com/karmaniverous/entity-tools/commit/bac76a03b1945bd241085c316b2ce7a3c7caa0b5)

#### [0.2.0](https://github.com/karmaniverous/entity-tools/compare/0.1.1...0.2.0)

> 16 September 2024

- Updated type mapping to transcode mapping [`ac36b2c`](https://github.com/karmaniverous/entity-tools/commit/ac36b2c4a8331607ad6454d006b3877526ed4f64)
- updated docs [`9632c30`](https://github.com/karmaniverous/entity-tools/commit/9632c306597d68b28be3736d40229e3a7fef79ec)
- chore: release v0.2.0 [`40fe17b`](https://github.com/karmaniverous/entity-tools/commit/40fe17bd72ec95ce80301d67a959d559cfaa564b)

#### [0.1.1](https://github.com/karmaniverous/entity-tools/compare/0.1.0...0.1.1)

> 14 September 2024

- updated dependencies [`6ad0ce4`](https://github.com/karmaniverous/entity-tools/commit/6ad0ce49be87770379e5f9b0fc14a5bc96a3bd80)
- chore: release v0.1.1 [`3a93e4c`](https://github.com/karmaniverous/entity-tools/commit/3a93e4cf9de62eda3cabe8c44b6abed500c8b456)

#### [0.1.0](https://github.com/karmaniverous/entity-tools/compare/0.0.5...0.1.0)

> 14 September 2024

- Refactored for common MockDb & EntityManager dependencies [`21926c1`](https://github.com/karmaniverous/entity-tools/commit/21926c1f107f559dde6b267f87f3efe8408b84db)
- chore: release v0.1.0 [`68e69f6`](https://github.com/karmaniverous/entity-tools/commit/68e69f6444398cf063ef3c2e54c21f88fbd7568d)

#### [0.0.5](https://github.com/karmaniverous/entity-tools/compare/0.0.4...0.0.5)

> 6 September 2024

- abstract & export DescMap type [`7ac5f43`](https://github.com/karmaniverous/entity-tools/commit/7ac5f43c986249e3bd3341e1b84566e2906abfcf)
- chore: release v0.0.5 [`449254a`](https://github.com/karmaniverous/entity-tools/commit/449254a9dbb8d24e6989a77a6ed8ec3d07deca9c)

#### [0.0.4](https://github.com/karmaniverous/entity-tools/compare/0.0.3...0.0.4)

> 6 September 2024

- improved generic type params [`d7efdde`](https://github.com/karmaniverous/entity-tools/commit/d7efdde8fb9549d9b4386f95c8a3478c58c6e8ed)
- chore: release v0.0.4 [`150048e`](https://github.com/karmaniverous/entity-tools/commit/150048e8bbbff8859d48490a1fe7a8362579e5aa)

#### [0.0.3](https://github.com/karmaniverous/entity-tools/compare/0.0.1...0.0.3)

> 6 September 2024

- updated docs [`4481358`](https://github.com/karmaniverous/entity-tools/commit/448135846e9052de589540b777388ce6eed0b7e2)
- updated release script [`7923a58`](https://github.com/karmaniverous/entity-tools/commit/7923a587c4a848e4c9e1a6dc8a6a4ffe965713b6)
- chore: release v0.0.3 [`d9a16e7`](https://github.com/karmaniverous/entity-tools/commit/d9a16e7d4a07b03ef015ac47fba8d357886990f8)
- updated release script [`05709d3`](https://github.com/karmaniverous/entity-tools/commit/05709d386a4a8273a4dd249b0a2ac6da083e0392)

#### 0.0.1

> 6 September 2024

- Initial commit [`49a2bb3`](https://github.com/karmaniverous/entity-tools/commit/49a2bb39a79c23a68c935e46247e5e26dd5066ee)
- initial commit [`a749df4`](https://github.com/karmaniverous/entity-tools/commit/a749df473bd44234c8badf9fa9c37b64334f4c8c)
- added sort & uniq [`1b89298`](https://github.com/karmaniverous/entity-tools/commit/1b89298d76b29b17209dd0bf6f9fcd4ee18da99d)
- updated docs [`e1326e2`](https://github.com/karmaniverous/entity-tools/commit/e1326e25c72c0f7fe23116135dfbb659416cdb8b)
- chore: release v0.0.1 [`402d9d0`](https://github.com/karmaniverous/entity-tools/commit/402d9d01a6bfafd048ad3776cd1673abbabd9c9e)
