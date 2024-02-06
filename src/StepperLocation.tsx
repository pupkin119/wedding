import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';


const steps = [
    {
        label: '13:50-14:00',
        description: `Cбор гостей у загса`,
    },
    {
        label: '14:40',
        description:
            'Регистрация нашего брака🤍',
    },
    {
        label: '15:10-16:30',
        description: `Фотосессия с гостями (никто не останется без ярких фотографий с нами на память)`,
    },
    {
        label: '17:00-22:00',
        description: `Начало банкета (большая программа от нашего ведущего и диджея, торт, танцы и, конечно, фото с бенгальскими огнями!)`,
    },
    {
        label: '22:00',
        description: `Завершение банкета`,
    },
];

export default function VerticalLinearStepper() {
    return (
        <Box sx={{maxWidth: 1920}}>
            <Stepper
                nonLinear={true}
                orientation="vertical">
                {steps.map((step, index) => (
                    <Step expanded={true} key={step.label}>
                        <StepLabel>
                            {step.label}
                        </StepLabel>
                        <StepContent>
                            <h3 className={'left-text'}>{step.description}</h3>
                        </StepContent>
                    </Step>
                ))}
            </Stepper>
        </Box>
    );
}