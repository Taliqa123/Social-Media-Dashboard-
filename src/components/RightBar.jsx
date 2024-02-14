import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

const RightBar = () => {
  return (
    <>
      <Box sx={{ display: { xs: "none", sm: "block" } }} flex={2} p={2}>
        <Box position="fixed" width={300}>
          <Typography variant="h6" fontWeight={300}>
            Online Friends
          </Typography>
          <AvatarGroup total={24}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
            <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
          </AvatarGroup>
          <Typography variant="h6" fontWeight={300} mt={2} mb={2}>
            Latest Photos
          </Typography>
          <ImageList
            cols={3}
            gap={5}
            rowHeight={100}
            // sx={{ marginRight: "10px" }}
          >
            <ImageListItem>
              <img
                src="https://www.foodandwine.com/thmb/FSs-ycLMQvWqnNJDH9xnlvPfe2w=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/foodinstagrams-ft-0218-3e90edfa002347f883da46f38be8a00a.jpg"
                alt=""
              />
            </ImageListItem>
            <ImageListItem>
              <img
                src="https://www.nyfa.edu/wp-content/uploads/2022/11/rachel-park-hrlvr2ZlUNk-unsplash.jpg"
                alt=""
              />
            </ImageListItem>
            <ImageListItem>
              <img
                src="https://blog.petpooja.com/wp-content/uploads/2022/01/Foodporn-Instagram-image-mise-en-avant.jpg"
                alt=""
              />
            </ImageListItem>
            <ImageListItem>
              <img
                src="https://hips.hearstapps.com/elleuk.cdnds.net/17/23/1600x800/landscape-1496918627-foodinstagram.jpg?resize=640:*"
                alt=""
              />
            </ImageListItem>
            <ImageListItem>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8pR_MOiQV3i2-mHDuik7IrEZ43RuZ9c8hFR6TtA7gMlZNQ6ctx5nuSHa_-QwUgDuSjYg&usqp=CAU"
                alt=""
              />
            </ImageListItem>
            <ImageListItem>
              <img
                src="https://i.pinimg.com/736x/63/0a/0b/630a0b60436b7efba1c7e9e335adecc3.jpg"
                alt=""
              />
            </ImageListItem>
          </ImageList>
          <Typography variant="h6" fontWeight={300} mt={2} mb={2}>
            Latest Conversations
          </Typography>

          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          >
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Brunch this weekend?"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Ali Connors
                    </Typography>
                    {" — I'll be in your neighborhood doing errands this…"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Summer BBQ"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      to Scott, Alex, Jennifer
                    </Typography>
                    {" — Wish I could come, but I'm out of town this…"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Oui Oui"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Sandra Adams
                    </Typography>
                    {" — Do you have Paris recommendations? Have you ever…"}
                  </React.Fragment>
                }
              />
            </ListItem>
          </List>
        </Box>
      </Box>
    </>
  );
};

export default RightBar;
