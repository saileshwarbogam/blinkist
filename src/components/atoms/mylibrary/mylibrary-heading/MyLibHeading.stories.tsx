import MyLibHeading from './MyLibHeading';
import {ComponentMeta , ComponentStory} from  '@storybook/react';

export default {
    title:'atoms/mylibrary/mylibrary-head/MyLibHeading',
    Component:MyLibHeading,
} as ComponentMeta<typeof MyLibHeading>;

const Template:ComponentStory<typeof MyLibHeading> = ()=><MyLibHeading />;

export const Primary = Template.bind({});
