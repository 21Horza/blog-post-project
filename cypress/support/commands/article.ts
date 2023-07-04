import { Article } from "../../../src/entities/Article";

const defaultArticle = {
    title: 'TEST ARTICLE',
    subtitle: 'Cool features in HTML5',
    img: 'https://play-lh.googleusercontent.com/RslBy1o2NEBYUdRjQtUqLbN-ZM2hpks1mHPMiHMrpAuLqxeBPcFSAjo65nQHbTA53YYn',
    views: 100,
    createdAt: '01.01.2001',
    userId: '1',
    type: [
        'IT',
    ],
    blocks: [],
};

export const createArticle = (article?: Article) => { 
    return cy.request({
        method: 'POST',
        url: `http://localhost:8000/articles`,
        headers: {Authorization: 'asas'},
        body: article ?? defaultArticle,
    }).then(resp => resp.body);
};

export const deleteArticle = (articleId: string) => {
    return cy.request({
        method: 'DELETE',
        url: `http://localhost:8000/articles/${articleId}`,
        headers: {Authorization: 'asas'},
    });
};

declare global {
    namespace Cypress {
      interface Chainable {
        createArticle(article?: Article): Chainable<Article>;
        deleteArticle(articleId: string): Chainable<void>;
      }
    }
};
