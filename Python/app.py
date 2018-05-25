#! python3
import pyautogui

distance = 200
while distance > 0:
    pyautogui.dragRel(distance, 0, duration=0.5)   # move right
    distance -= 5
    pyautogui.dragRel(0, distance, duration=0.5)   # move down
    pyautogui.dragRel(-distance, 0, duration=0.5)  # move left
    distance -= 5
    pyautogui.dragRel(0, -distance, duration=0.5)  # move up