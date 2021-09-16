import React from 'react'
import { Title } from 'react-admin'
import { Card, CardContent } from '@material-ui/core'

const Dashboard: React.FC = () => {
    return (
        <Card>
            <Title title='Vítejte na dashboard page'/>
            <CardContent>Obsah, zde by mělo být tlačítko pro možnost 
                nastavování typů v evidenci, také by tu mohlo být nějaké statistické shrnutí atp.</CardContent>
        </Card>
    )
}

export default Dashboard;