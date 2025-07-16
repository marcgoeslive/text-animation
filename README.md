# Text Animation

A JavaScript component that animates numbers by counting up to a defined maximum value.

## Features

The component offers the following main features:
- Animated counting from a start number to a target number
- Automatic calculation of animation steps
- Number formatting with thousand separators (dots)
- Smooth animation using requestAnimationFrame

## Installation

1. Include the JavaScript file in your project:
2. Add an HTML element with the class "number" where the animation should be displayed:

## Configuration

The default configuration includes the following parameters:
- Animation duration: 3000ms (3 seconds)
- Update interval: 50ms
- Start number: "000000"
- End number: 50000

## Usage

The animation starts automatically upon initialization.

## Customization

To modify the default values, you can change the class properties before initialization.

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| m_animationDuration | Number | 3000 | Duration of the animation in milliseconds |
| m_animationUpdate | Number | 50 | Update interval in milliseconds |
| m_finalNumber | Number | 50000 | Target number to count up to |
| m_startNumber | String | "000000" | Initial number to start from |

## Methods

- `animate()`: Starts the animation sequence
- `nextFrame()`: Calculates and displays the next number in the sequence
- `setIncreaseCounter()`: Calculates the increment steps based on duration and update interval
- `addDot()`: Formats numbers with thousand separators

## Technical Details

- Uses `window.requestAnimationFrame` for smooth animations
- Requires jQuery for DOM manipulation
- Automatically calculates increment steps based on animation parameters
- Implements thousand separator formatting for better readability

## Dependencies

- jQuery (for DOM manipulation)
- Modern browser with `requestAnimationFrame` support

## Browser Support

Works in all modern browsers that support `requestAnimationFrame`.

## Example

```html
<!DOCTYPE html>
<html>
<head>
    <script src="jquery.min.js"></script>
    <script src="textanimation.js"></script>
</head>
<body>
    <div class="number"></div>
</body>
</html>
```
