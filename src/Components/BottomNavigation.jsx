import * as React from "react";
import Box from "@mui/joy/Box";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab, { tabClasses } from "@mui/joy/Tab";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import Person from "@mui/icons-material/Person";
import { Link } from "react-router-dom";

export default function BottomNavigation() {
  const [index, setIndex] = React.useState(0);
  const colors = ["primary", "danger", "warning"];
  return (
    <Box
      sx={{
        flexGrow: 1,
        m: -3,
        p: 4,
        borderTopLeftRadius: "12px",
        borderTopRightRadius: "12px",
        bgcolor: `${"var(--colors-index)"}.500`,
      }}
      style={{ "--colors-index": colors[index] }}
    >
      <Tabs
        size="lg"
        aria-label="Bottom Navigation"
        value={index}
        onChange={(event, value) => setIndex(value)}
        sx={(theme) => ({
          p: 1,
          borderRadius: 16,
          maxWidth: 400,
          mx: "auto",
          boxShadow: theme.shadow.sm,
          "--joy-shadowChannel": theme.vars.palette[colors[index]].darkChannel,
          [`& .${tabClasses.root}`]: {
            py: 1,
            flex: 1,
            transition: "0.3s",
            fontWeight: "md",
            fontSize: "md",
            [`&:not(.${tabClasses.selected}):not(:hover)`]: {
              opacity: 0.7,
            },
          },
        })}
      >
        <TabList
          variant="plain"
          size="sm"
          disableUnderline
          sx={{ borderRadius: "lg", p: 0 }}
        >
          <Link to="/">
            <Tab
              disableIndicator
              orientation="vertical"
            >
              <ListItemDecorator>
                <EqualizerIcon />
              </ListItemDecorator>
              Dashboard
            </Tab>
          </Link>

          <Link to="/warnings">
            <Tab
              disableIndicator
              orientation="vertical"
            >
              <ListItemDecorator>
                <WarningAmberIcon />
              </ListItemDecorator>
              <span className="inline-block whitespace-nowrap">
                Warning Logs
              </span>{" "}
            </Tab>
          </Link>

          <Link to="/profile">
            <Tab
            sx={{
                padding:"3rem",
            }}
              disableIndicator
              orientation="vertical"
            >
              <ListItemDecorator>
                <Person />
              </ListItemDecorator>
              Profile
            </Tab>
          </Link>
        </TabList>
      </Tabs>
    </Box>
  );
}
