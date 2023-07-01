import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticleListItem } from './ArticleListItem';
import { Article } from '../../model/types/article';
import { ArticleView } from '../../model/consts/consts';

export default {
    title: '/ArticleListItem',
    component: ArticleListItem,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleListItem>;
const Template: ComponentStory<typeof ArticleListItem> = (args) => <ArticleListItem {...args} />;

const article = {
    id: '1',
    title: 'HTML5 Features',
    subtitle: 'Cool features in HTML5',
    img: 'https://play-lh.googleusercontent.com/RslBy1o2NEBYUdRjQtUqLbN-ZM2hpks1mHPMiHMrpAuLqxeBPcFSAjo65nQHbTA53YYn',
    views: 1022,
    createdAt: '10.01.2023',
    user: {
        id: '1',
        username: 'Horza',
        avatar: 'https://sun9-2.userapi.com/c857528/v857528575/4709a/gPOpYAuVscI.jpg',
    },
    type: [
        'IT',
    ],
    blocks: [
        {
            id: '1',
            type: 'TEXT',
            title: "Overview of HTML5 features introduced in Codecademy's Make a Website course.",
            paragraphs: [
                'Web languages need regular upgrades in order to stay current and solve new problems faced by web developers. HTML5 is the latest version of HTML. Below are some HTML5 features you will encounter as you learn with Codecademy.',
            ],
        },
        {
            id: '2',
            type: 'TEXT',
            title: 'video',
            paragraphs: [
                'The video element allows you to easily stream video from a website.',
            ],
        },
        {
            id: '3',
            type: 'CODE',
            code: '<video width="450px" height="350px" controls>\n  <source src="video-url.mp4" type="video/mp4">\n</video>',
        },
        {
            id: '4',
            type: 'TEXT',
            paragraphs: [
                'In the HTML above, width and height set the dimensions for the video element. The controls attribute creates playback buttons such as “Play” and “Pause”. The source src tag provides the URL where the video is hosted and type specifies the video’s type, in this case, “video/mp4”.',
            ],
        },
        {
            id: '5',
            type: 'TEXT',
            title: 'figure',
            paragraphs: [
                'Figure elements can be used to display visual content, such as photos, illustrations, diagrams or code snippets.',
            ],
        },
        {
            id: '6',
            type: 'CODE',
            code: '<figure class="gallery-item">\n  <img src="image-1.png">\n</figure>\n<figure class="gallery-item">\n  <img src="image-2.png">\n</figure>',
        },
        {
            id: '7',
            type: 'TEXT',
            paragraphs: [
                'In the example code above, figure elements have the class “gallery-item”, and each contains an img element.',
            ],
        },
        {
            id: '8',
            type: 'TEXT',
            title: 'section',
            paragraphs: [
                'Section elements, like divs, can be used to organize webpage content into thematic groups.',
            ],
        },
        {
            id: '9',
            type: 'CODE',
            code: '<section class="contact-form">\n  <h2>Contact Us</h2>\n<form>\n    ...\n  </form>\n</section>',
        },
        {
            id: '10',
            type: 'TEXT',
            paragraphs: [
                'Above, a section element is used to organize h2 and form elements for a website’s “Contact Us” feature.',
            ],
        },
        {
            id: '11',
            type: 'TEXT',
            title: 'nav',
            paragraphs: [
                'The nav element is used for the part of a website that links to other pages on the site. The links can be organized a number of ways. Below, the links are displayed within paragraph elements. An unordered list could also be used.',
            ],
        },
        {
            id: '12',
            type: 'CODE',
            code: '<nav>\n  <p><a href="login.html">Log In</a></p>\n  <p><a href="signup.html">Sign Up</a></p>\n  <p><a href="contact.html">Contact Us</a></p>\n</nav>',
        },
        {
            id: '13',
            type: 'TEXT',
            title: 'header',
            paragraphs: [
                'The header element can be used to group together introductory elements on a website, such as a company logo, navigation items, and sometimes, a search form.',
            ],
        },
        {
            id: '14',
            type: 'CODE',
            code: '<header>\n  <img src="company-logo.png">\n  <nav>\n    <p><a href="login.html">Log In</a></p>\n    <p><a href="signup.html">Sign Up</a></p>\n    <p><a href="contact.html">Contact Us</a></p>\n  </nav>\n</header>',
        },
        {
            id: '15',
            type: 'TEXT',
            paragraphs: [
                'Above, the header element encloses the img and nav.',
            ],
        },
        {
            id: '16',
            type: 'TEXT',
            title: 'footer',
            paragraphs: [
                'The footer element is typically found at the bottom or foot of a webpage. It can contain copyright information, links to social media and additional site navigation items.',
            ],
        },
        {
            id: '17',
            type: 'CODE',
            code: '<footer>\n  <p>&copy; Acme Granola Corporation 2016<p>\n  <div class="social">\n     <a href="#"><img src="instagram-icon.png"></a>\n    <a href="#"><img src="facebook-icon.png"></a>\n    <a href="#"><img src="twitter-icon.png"></a>\n  </div>\n</footer>',
        },
        {
            id: '15',
            type: 'TEXT',
            paragraphs: [
                'Above, between <footer> and </footer>, copyright information is contained in the p element, and social media links are contained within the div with class “social”.',
            ],
        },
    ],
} as Article;

export const Big = Template.bind({});
Big.args = {
    view: ArticleView.BIG,
    article,
};

export const Small = Template.bind({});
Small.args = {
    view: ArticleView.SMALL,
    article,
};
