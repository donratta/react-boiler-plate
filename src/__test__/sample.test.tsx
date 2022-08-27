import * as React from 'react';
import { renderHook } from '@testing-library/react';
import { useEffect, useState } from 'react';
import * as renderer from 'react-test-renderer';


describe('Sample test jsx', () => {
    it('Should pass as a renderer', () => {
        const { result } = renderHook(() => {
            const [name, setName] = useState('')
            useEffect(() => {
                setName('Alice')
            }, [])

            return name
        });

        expect(result.current).toBe('Alice')
    });
    it('Should be the component rendered here', () => {
        const component = renderer.create(<div>Sample</div>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
