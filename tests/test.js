import { Builder, By, Key, until } from "selenium-webdriver";
import { expect } from 'chai';
import { describe, it, before, after } from 'mocha';

describe('Google search', () => {
    let driver;

    before(async function() {
        this.timeout(30000); // Set the timeout using Mocha's function
        driver = await new Builder().forBrowser("chrome").build();
    });

    after(async function() {
        if (driver) {
            await driver.quit();
        }
    });

    it('Search for Amazon', async function() {
        await driver.get('http://www.google.com');
        // Example: perform search
        try {
            const acceptBtn = await driver.findElement(By.xpath('//button[@id="L2AGLb"]'));
            await acceptBtn.click();
            console.log('Clicked on "Accept all" button.');
        } catch (error) {
            console.log('No "Accept all" button found.');
        }

        const searchBar = await driver.findElement(By.name('q'));
        await searchBar.sendKeys('Amazon', Key.RETURN)
    });
});
