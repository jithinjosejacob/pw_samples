**Prerequisities**

Nodejs stable version should be installed in your machine.

**Setup**

1) Clone repo to your local
2) Run command - npm ci

**Running Specific tests**

1. Cross Browser(Chromium, Webkit, Firefox) - npx playwright test TC001_crossbrowsers.spec.js

Device Emulation - npx playwright test --config=mobile.config.js TC001_crossbrowsers.spec.js

2. waits - npx playwright test TC002_waits.spec.js --project=DesktopChromium
3. PageEval  - npx playwright test TC003_pageeval.spec.js --project=DesktopChromium
4. Geolocation - npx playwright test TC004_geo.spec.js --config=geo.config.js --timeout 800000                                                                                               works on iPhone11 Webkit.
5. Visual Testing - npx playwright test TC005_visualtesting.spec.js --project=DesktopChromium
6. Playwright Traceviewer- Trace config available in playwright.config.js

npx playwright test TC006_traceviewer.spec.js --project=DesktopChromium

`npx playwright show-trace test-results\tests-TC006_traceviewer-Trace-viewer-test-DesktopChromium\trace.zip`

7. Playwright Inspector

npx playwright test TC007_pwinspector.spec.js --project=DesktopChromium --timeout 800000

8. Api tests

npx playwright test TC008_api.spec.js --project=DesktopChromium

**Note:** Make some changes and push to github,it should trigger github actions ci pipeline.

Pages used

1) https://playwright.dev/ - Official site
2) https://help.afterpay.com/hc/en-au - Demo Page
3) https://github.com/jithinjosejacob/playwright_stag/actions/ - CI
4) https://github.com/microsoft/playwright/blob/7ccdc5176ded3e76566b6f7981b6136cfcadd7b0/src/server/deviceDescriptors.ts - Device List
5) https://playwright.dev/docs/actionability/ - Auto waiting
6) https://www.npmjs.com/package/pixelmatch - Pixelmatch(Visual Comparison)
7) https://playwright.dev/docs/emulation/ - Device Emulation
