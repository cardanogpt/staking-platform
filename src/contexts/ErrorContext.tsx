import React, { createContext, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import Typography from "@mui/material/Typography";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

import Slide from "@mui/material/Slide";

export const ErrorContext = createContext<{
	//save error title and message
	error: React.ReactNode | null;
	//trigger error
	triggerError: (error: React.ReactNode) => void;
}>({
	error: null,
	triggerError: () => {},
});

export const ErrorProvider = ({ children }: { children: React.ReactNode }) => {
	function SlideTransition(props: any) {
		return <Slide {...props} direction="down" />;
	}
	const [state, setState] = React.useState({
		open: false,
		Transition: SlideTransition,
	});

	const [error, setError] = React.useState<React.ReactNode | null>(null);

	const triggerError = (error: React.ReactNode) => {
		setError(error);
		setState({
			...state,
			open: true,
		});
	};

	const handleClose = () => {
		setState({
			...state,
			open: false,
		});
	};

	useEffect(() => {
		if (error) {
			console.error(error);
		}
	}, [error]);

	return (
		<ErrorContext.Provider value={{ error, triggerError }}>
			{children}
			<Box>
				{/* Error Demo Display */}
				<Snackbar
					anchorOrigin={{ vertical: "top", horizontal: "center" }}
					open={state.open}
					onClose={handleClose}
					TransitionComponent={state.Transition}
					message="I love snacks"
					key={state.Transition.name}
					autoHideDuration={4000}
				>
					<Alert
						onClose={handleClose}
						severity="info"
						variant="outlined"
						icon={false}
						action={
							<Button
								color="inherit"
								onClick={handleClose}
								size="small"
								sx={{ alignSelf: "center" }}
							>
								<HighlightOffIcon />
							</Button>
						}
						sx={{
							width: "500px",
							backgroundColor: "#ffffff",
							color: "secondary.500",
							padding: "1rem",
							borderRadius: "1rem",
						}}
					>
						<Typography
							variant="h6"
							color="#E80101"
							fontWeight={700}
							fontSize={"1.5rem"}
						>
							Error
						</Typography>
						<Typography
							paragraph
							maxWidth={450}
							color={"secondary.600"}
						>
							{error}
						</Typography>
					</Alert>
				</Snackbar>
			</Box>
		</ErrorContext.Provider>
	);
};
