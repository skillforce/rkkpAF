import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';

import Accordion, {AccordionPropsType} from './accordion'
import {Story} from '@storybook/react';
import {items} from '../../App';

export default {
    component: Accordion,
    title: 'AccContr stories'
}

const callback = action('accordion mode change event fired');
const onClickCallback = (id:number) =>alert(`you type on user #${id}`);

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args} />

const callBackProps = {
    titleValue: 'collapsed',
    setAccColl: callback
}


export const ColapsedMode2 = Template.bind({});
ColapsedMode2.args = {
    ...callBackProps,
    collapsed: true

}
export const UnColapsedMode2 = Template.bind({});
UnColapsedMode2.args = {
    ...callBackProps,
    collapsed: false
}


export const CollapsedMode = () => <Accordion items={items}
                                              titleValue={'collapsed'}
                                              collapsed={true}
                                              setAccColl={callback}
                                              onClick={onClickCallback}
/>;
export const UnCollapsedMode = () => <Accordion items={items} titleValue={'Uncollapsed'} collapsed={false}
                                                setAccColl={callback}
                                                onClick={onClickCallback}/>;
export const ChangedAccordion = () => {
    const [collapsed, setCollapsed] = useState(false);
    return <Accordion items={items} titleValue={'ControllCollapsed'} collapsed={collapsed} setAccColl={setCollapsed}
                      onClick={onClickCallback}/>
};