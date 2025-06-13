import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface ButtonProps {
    label: string;
    onPress: () => void;
}

export default function CalcButton({ label, onPress }: ButtonProps) {
    if (!label) return <TouchableOpacity style={[styles.button, styles.disabled]} disabled />;

    const isOperator = ['/', '%', '*', '-', '+', '='].includes(label);
    const isClear = label === 'C';
    const isDel = label === 'DEL';

    return (
        <TouchableOpacity
            style={[
                styles.button,
                isOperator && styles.operator,
                isClear && styles.clear,
                isDel && styles.delete,
            ]}
            onPress={onPress}
        >
            <Text style={styles.text}>{label}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#333',
        flex: 1,
        margin: 5,
        height: 85,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    operator: {
        backgroundColor: '#f39c12',
    },
    clear: {
        backgroundColor: '#e74c3c',
    },
    delete: {
        backgroundColor: '#3498db',
    },
    disabled: {
        backgroundColor: '#202020',
    },
    text: {
        fontSize: 28,
        color: '#fff',
    },
});
