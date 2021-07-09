import React from 'react';
import { boolean } from '@storybook/addon-knobs';
import News from './News'
import mockNews from 'models/mockNews'
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import theme from 'theme'

export default {
    title: 'Components/News',
    decorators: [
        (storyFn: () => React.ReactNode) => (
            <>
                <CssBaseline />
                <ThemeProvider theme={theme}>
                    {storyFn()}
                </ThemeProvider>
            </>
        )
    ]
};


export const NewsArea = (args: any) => {
    const loading = boolean('Loading', false)
    const articles: any[] = loading ? [{}] : mockNews
    return (
        <>
            {articles.map((article: any) => (
                <><News {...args} article={article} /><br /><br /></>
            ))}
        </>
    )
}
NewsArea.args = {
    article: mockNews[Math.floor(Math.random() * mockNews.length)],
    className: 'cool-mock-news-story',
    dark: true
}