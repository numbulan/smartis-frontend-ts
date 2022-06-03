import { Stack, Card } from "react-bootstrap";
import React from "react";

const SmartisItem: React.FC<{
  from: string;
  date: string;
  message: string;
}> = (props) => {
  const userName = props.from.charAt(0).toUpperCase() + props.from.slice(1);
  const date = new Date(Date.parse(props.date));
  return (
    <Card className="text-center">
      <Stack gap={2} className="col-md-5 mx-auto">
        <Stack direction="horizontal" gap={3}>
          <Stack direction="horizontal" gap={1}>
            <label htmlFor="from">From:</label>
            {userName}
          </Stack>
          <Stack direction="horizontal" gap={1}>
            <label htmlFor="on">On:</label>
            {date.toDateString()}
          </Stack>
        </Stack>
        <Stack direction="horizontal" gap={1}>
          <div>{props.message}</div>
        </Stack>
      </Stack>
    </Card>
  );
};

export default SmartisItem;
