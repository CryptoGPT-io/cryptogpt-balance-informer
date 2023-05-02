import { FetchView, Breadcrumbs2, fetchApi, IBreadcrumbs2Option, Breadcrumbs2Type } from "react-declarative";

import { makeStyles } from "../../styles";

import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import StockChart from "./StockChart";

import IStockItem from "../../model/IStockItem";
import { CC_HISTORY_URI } from "../../config/params";

const useStyles = makeStyles()({
  root: {},
  container: {
    position: "relative",
    minHeight: 660,
    margin: 0,
    padding: 0,
    height: "100%",
    width: "100%",
    overflow: "hidden",
  },
  editor: {
    position: "absolute",
    top: 48,
    left: 0,
    right: 0,
    bottom: 0,
    background: "#0003",
  },
});

const items: IBreadcrumbs2Option[] = [
    {
        type: Breadcrumbs2Type.Link,
        action: 'root',
        label: 'HypeBot',
    },
    {
        type: Breadcrumbs2Type.Link,
        action: 'cap',
        label: 'Capitalization',
    },
    {
        type: Breadcrumbs2Type.Button,
        action: 'reload',
        label: 'Refresh',
    },
];

export const BalancesView = () => {
  const { classes } = useStyles();

  const state = async () =>await fetchApi<IStockItem[]>(CC_HISTORY_URI);

  return (
    <FetchView state={state}>
      {async (stocks) => {
        return (
          <Stack gap="5px" pt={1}>
            <Breadcrumbs2
                items={items}
                onAction={() => window.location.reload()}
            />
            <Paper className={classes.container}>
              <Tabs
                value={0}
                indicatorColor="primary"
                textColor="primary"
                aria-label="disabled tabs example"
              >
                <Tab label="Capitalization history" />
              </Tabs>
              <div className={classes.editor}>
                <StockChart items={stocks} />
              </div>
            </Paper>
          </Stack>
        );
      }}
    </FetchView>
  );
};

export default BalancesView;
