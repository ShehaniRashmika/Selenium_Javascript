import {Builder, By, Key, until} from 'selenium-webdriver'
import { expect } from 'chai'
import { describe,it, before,after } from 'mocha'

describe('Login Feature', ()=>{

    let driver;

    before(async function(){

        this.timeout(30000);
        driver = await new Builder().forBrowser('chrome').build();

    });

    after(async function(){
      if(driver){
     await driver.quit();
      }
    });

    it('Login to Sauce Demo', async function(){

     await driver.get('https://www.saucedemo.com/');
     const username= await driver.findElement(By.id('user-name'));
     await username.sendKeys("standard_user");
     const password= await driver.findElement(By.id('password'));
     await password.sendKeys('secret_sauce');
     
     const loginBtn=await driver.findElement(By.name('login-button'));
     await loginBtn.click();
    });

}) 