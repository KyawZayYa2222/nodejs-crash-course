const posts = [
    {
        id: 1,
        title: "First Post",
        content: "This is the first blog post",
    },
    {
        id: 2,
        title: "Second Post",
        content: "This is the second blog post",
    },
    {
        id: 3,
        title: "Third Post",
        content: "This is the third blog post",
    }
];

const getposts = () => posts;

export const getpostsLength = () => posts.length;

export default getposts;