import { Meta, Story } from '@storybook/react';
import { GridTwoColumns, GridTwoColumnsProps } from '.';

import mock from './mock';

export default {
  title: 'GridTwoColumns',
  component: GridTwoColumns,
  args: mock,
  argTypes: {
    children: { type: 'string' },
  },
} as Meta;

export const Template: Story<GridTwoColumnsProps> = (args) => {
  return (
    <div>
      <GridTwoColumns {...args} />
    </div>
  );
};
