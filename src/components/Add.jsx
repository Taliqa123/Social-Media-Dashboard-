import React, { useState } from "react";

import Tooltip from "@mui/material/Tooltip";
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  InputBase,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import styled from "@emotion/styled";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

import ImageIcon from "@mui/icons-material/Image";
import DateRangeIcon from "@mui/icons-material/DateRange";

import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
const Add = () => {
  const [open, setOpen] = React.useState(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",

    boxShadow: 24,
    p: 4,
  };

  const UserBox = styled("div")(({ theme }) => ({
    display: "flex",
    gap: "10px",
    alignItems: "center",
  }));
  return (
    <>
      <Tooltip
        onClick={(e) => setOpen(true)}
        title="Add"
        sx={{
          position: "fixed",
          bottom: "20px",
          left: { xs: "calc(50% -25px)", md: "30px" },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>

      <Modal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} bgcolor={"background.default"} color={"text.primary"}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            textAlign="center"
          >
            Create Post
          </Typography>

          <UserBox>
            <Avatar
              sx={{ width: 30, height: 30 }}
              alt="Remy Sharp"
              src="https://i.pinimg.com/736x/63/0a/0b/630a0b60436b7efba1c7e9e335adecc3.jpg"
            />

            <Typography fontWeight={600} variant="span">
              Taliqa Dev
            </Typography>
          </UserBox>

          <TextField
            sx={{ mt: 2, mb: 2, width: "100%" }}
            placeholder="What is your mind?"
            multiline
            variant="standard"
          />
          <Stack direction="row" gap={1} mt={2}>
            <EmojiEmotionsIcon color="primary" />
            <ImageIcon color="secondary" />
            <PersonAddIcon color="success" />
            <VideoCameraBackIcon color="warning" />
          </Stack>

          <ButtonGroup
            fullWidth
            sx={{ mt: 2, mb: 2 }}
            variant="contained"
            aria-label="Basic button group"
          >
            <Button>Post</Button>
            <Button sx={{ width: "100px" }}>
              <DateRangeIcon />
            </Button>
          </ButtonGroup>
        </Box>
      </Modal>
    </>
  );
};

export default Add;
