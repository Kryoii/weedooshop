import { Box, Popover, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Link from "next/link";
import React from "react";
import { useContext } from "react";
import { DropdownContext } from "./DropdownUtility";

function Dropdown({ items, open, popOverRef, id, bool }) {
  const useStyles = makeStyles((theme) => ({
    popover: {
      pointerEvents: "none",
    },
    popoverContent: {
      pointerEvents: "auto",
    },
  }));
  const classes = useStyles();
  const { OpenPopover } = useContext(DropdownContext);
  return (
    <Popover
      id={id}
      open={open}
      className={classes.popover}
      classes={{
        paper: classes.popoverContent,
      }}
      anchorEl={popOverRef.current}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      PaperProps={{
        onMouseEnter: () => {
          OpenPopover(bool, true);
        },
        onMouseLeave: () => {
          OpenPopover(bool, false);
        },
      }}
    >
      <Box px={3} py={2}>
        {items.map((a, i) => (
          <Link href="/" passHref key={a.title}>
            <a>
              <Typography mb={i + 1 !== items.length ? 1 : 0} variant="body1">
                {a.title}
              </Typography>
            </a>
          </Link>
        ))}
      </Box>
    </Popover>
  );
}

export default Dropdown;
