import * as puppeteer from 'puppeteer';

async function waitForTextAndExtract(page: puppeteer.Page, selector: string): Promise<string> {
    await page.waitForSelector(selector); // selector가 나타날 때까지 대기
    const element = await page.$(selector); // selector에 해당하는 첫 번째 요소 가져오기
    const text = await element?.evaluate((node) => node.textContent); // 요소 내용 추출
    return text?.trim() || ""; // 추출한 내용 반환
  }
  



(async () => {
  const browser = await puppeteer.launch();

  try {
    const page = await browser.newPage();
    await page.goto('https://wrtn.ai/app/login/');
    await page.waitForTimeout(1000);
 
    let title = await page.title();
    let url = await page.url();
    console.log(title,url);
    // 시작하기 버튼 클릭
    // await page.click('#gatsby-focus-wrapper > div > header > div > a:nth-child(3) > button');
    // await page.waitForTimeout(1000);


    // 시작하기 버튼 클릭
    //await page.click('#\\32 vi9s8d > div > div.sc-ileqoI.ljqCQV > div.sc-kJCwM.eNNPCs > a.sc-bqhYDU.sc-iNwYuJ.dXdOGa.hzTZdL');
      await page.click('#\\32 vi9s8d > div > div:nth-child(1) > div:nth-child(3) > a:nth-child(5)');
    await page.waitForTimeout(1000);
    title = await page.title();
    url = await page.url();
    console.log(title,url);


    // // 이메일 입력하기
    const inputEmail = '#\\32 vi9s8d > div > div:nth-child(1) > div > div:nth-child(4) > div:nth-child(2) > div > input';
    await page.waitForSelector(inputEmail);
    await page.type(inputEmail, 'jjsk109@naver.com');
    await page.waitForTimeout(1000);
 
    // 계속하기 1차
    await page.click('#\\32 vi9s8d > div > div:nth-child(1)  > div > div:nth-child(5) > button');
    await page.waitForTimeout(1000);

    // 페스워드 입력하기
    const inputPassword = '#\\32 vi9s8d > div > div:nth-child(1) > div > div:nth-child(5) > div:nth-child(2) > div > input';
    await page.waitForSelector(inputPassword);
    await page.type(inputPassword, 'kingark1593!@');
    await page.waitForTimeout(500);
    
    // // 계속하기 2차
    await page.click('#\\32 vi9s8d > div > div:nth-child(1) > div > div:nth-child(6) > button');
    await page.waitForTimeout(2000);
    
    
    await page.goto('https://wrtn.ai/app/tool/62fb70dc77ba1530712e7397');
    await page.waitForTimeout(2000);
   // 결과 확인하기 타이틀과 URL로 확인
   title = await page.title();
   url = await page.url();
   console.log(title,url);

   
    // 채용 공고 모집 부분 추가
    const inputText = '#safeWrapper > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div > input';
    
    await page.waitForSelector(inputText);
    await page.type(inputText, '디피플래닝 개발자 데이터 엔지니어');
    await page.waitForTimeout(500);
    await page.click('#safeWrapper > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > button');
    //await page.waitForTimeout(100000);
    await page.waitForTimeout(100000);
    
    const textContent = await page.evaluate(() => {
      
        return document.querySelector('#safeWrapper > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(2) > div:nth-child(1) > div > div > div:nth-child(1) > textarea').value;
      });
    console.log(textContent);
    // const frame = page.frames()[0];
    // await frame.evaluate(() => {
    //   console.log('Hello, world!');
    // });
    


  } catch (error) {
    console.error(error);
  } finally {
    await browser.close();
  }
})();


/**
 * 실행 방법 
 * npx tsc -p crawl.ts
 * node crawl.js
 */