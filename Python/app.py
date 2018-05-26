#! python3
import pyautogui
import time

# Delay start

time.sleep(5)

# Detect screen resolution

# Detect if program is opn

# Focus on program and maximize

# Select menu search
pyautogui.hotkey('ctrl', 'm')
# Select menu
pyautogui.typewrite('13.12.1')
pyautogui.press('enter')

# Fill out menu
# Site
pyautogui.typewrite('370')
pyautogui.press('enter')
# Cost Set
pyautogui.typewrite('CURRENT')
pyautogui.press('enter')
# Item (From: and To:)
pyautogui.typewrite('TEST')
pyautogui.press('tab')
pyautogui.typewrite('TEST')
# Tab to next input field
for _ in range(11):
    pyautogui.press('tab')
# Freeze or Unfreeze
pyautogui.press('f')
pyautogui.press('enter')
# Submit form
pyautogui.press('enter')
# Check for menu run completion

