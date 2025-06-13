import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import CalcButton from '../components/Button';

const buttons = [
    ['C', 'DEL', '%', '/'],
    ['7', '8', '9', '*'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['00', '0', '.', '='],
];

export default function CalculatorScreen() {
    const [expression, setExpression] = useState('');
    const [result, setResult] = useState('');

    const handlePress = (val: string) => {
        if (val === 'C') {
            setExpression('');
            setResult('');
        } else if (val === 'DEL') {
            setExpression(expression.slice(0, -1));
        } else if (val === '=') {
            try {
                const evalResult = eval(expression);
                setResult('= ' + evalResult.toString());
            } catch {
                setResult('Error');
            }
        } else {
            setExpression(expression + val);
            setResult('');
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Smart Calculator</Text>
                <Text style={styles.subtitle}>Simple. Clean. Fast.</Text>
            </View>

            <View style={styles.display}>
                <Text style={styles.expression}>{expression}</Text>
                <Text style={styles.result}>{result}</Text>
            </View>
            <View style={styles.buttons}>
                {buttons.map((row, i) => (
                    <View style={styles.row} key={i}>
                        {row.map((btn, j) => (
                            <CalcButton key={j} label={btn} onPress={() => handlePress(btn)} />
                        ))}
                    </View>
                ))}
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    header: {
        padding: 20,
        paddingTop: 40,
        backgroundColor: '#1e1e1e',
        position: 'absolute',
        top: 0,
        left: 0,
    },
    title: {
        fontSize: 28,
        color: '#f39c12',
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 16,
        color: '#9ca3af',
        marginTop: 4,
    },

    container: { flex: 1, backgroundColor: '#202020', justifyContent: 'flex-end' },
    display: {
        paddingHorizontal: 20,
        paddingBottom: 10,
        minHeight: 120, 
        justifyContent: 'flex-end',
    },
    expression: { fontSize: 46, color: '#fff', textAlign: 'right' },
    result: { fontSize: 44, color: '#aaa', textAlign: 'right', marginTop: 10 },

    buttons: {
        paddingHorizontal: 20,
        paddingBottom: 30,
    }, row: { flexDirection: 'row', justifyContent: 'space-between' },
});
