import { ComponentStory, ComponentMeta } from '@storybook/react';
import AvatarDrop from './AvatarDrop';



export default {
  title: 'molecule/AvatarDrop',
  component: AvatarDrop,

} as ComponentMeta<typeof AvatarDrop>;


const Template: ComponentStory<typeof AvatarDrop> = (args) => <AvatarDrop {...args}/>;




export const Primary = Template.bind({});

Primary.args={
    isAuthenticated : true,
    handleClick: (event: React.MouseEvent<HTMLElement>) => console.log("Testing"),
    
};