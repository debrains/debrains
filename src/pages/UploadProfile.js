import * as React from "react";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import { styled } from "@mui/material/styles";
import { Badge, Button, Grid, Paper } from "@mui/material";
import { useState } from "react";
import * as PropTypes from "prop-types";
import Container from "@mui/material/Container";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

Item.propTypes = { children: PropTypes.node };
export default function UploadProfile() {
  const [name, setName] = useState("닉네임은보통 몇글자?");

  const onChange = (event) => {
    setName(event.target.value);
  };

  return (
    <>
      <Box component="span" sx={{ fontSize: 25, mt: 2, ml: 5, mb: 1 }}>
        프로필 등록
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          border: 1,
          borderColor: "primary.main",
          borderRadius: "15px",
          fontWeight: "bold",
          m: 1,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center" },
            p: 3,
            width: "25%",
            minHeight: 420,
          }}
        >
          <Box
            component="img"
            sx={{
              height: 150,
              width: 150,
              borderRadius: 100,
            }}
            alt="The house from the offer."
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
          />
          <Box
            component="span"
            sx={{
              color: "primary.main",
              fontSize: 15,
              mt: 3,
              maxWidth: 130,
            }}
          >
            {name}
          </Box>
        </Box>

        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", md: "flex-start" },
            maxWidth: "sm",
          }}
        >
          <Box component="span" sx={{ fontSize: 16, mt: 1 }}>
            데브레인에 오신 것을 환영합니다! 🤗
          </Box>
          <Box component="span" sx={{ fontSize: 16, mt: 1 }}>
            💻 프로필을 등록해주세요
          </Box>
          <Box component="span" sx={{ fontSize: 12, mt: 1 }}>
            내 모습 그대로 당당하게!
          </Box>
          <Box component="span" sx={{ fontSize: 16, mt: 1 }}>
            🖱 매일매일 기록해요!
          </Box>
          <Box component="span" sx={{ fontSize: 12, mt: 1 }}>
            차곡차곡 쌓이는 나의 성장 기록!!
          </Box>
          <Container
            fullWidth
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-start" },
              mt: 1,
              mb: 1,
              border: 1,
            }}
          >
            <Box>기본정보 등록</Box>
            <Container
              fullWidth
              sx={{
                flexDirection: { xs: "column", md: "row" },
                alignItems: "center",
              }}
            >
              <Box component="span" sx={{ fontSize: 16, mt: 1 }}>
                닉네임
              </Box>
              <Input value={name} onChange={onChange} sx={{ width: "90%" }} />
            </Container>
          </Container>
          <Button variant="contained" fullWidth sx={{ mb: 2 }}>
            다음 : 관심사 선택
          </Button>
        </Container>
      </Box>
    </>
  );
}
