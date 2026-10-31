import turtle as t


def jump_to(x, y):
    t.penup()
    t.goto(x, y)
    t.pendown()


def draw_custom_grid(width, height, step, color):
    top_left_x = -width // 2
    top_left_y = height // 2

    t.pencolor(color)
    t.tracer(False)

    i = 0
    while i <= height // step:
        jump_to(top_left_x, top_left_y - step * i)
        t.forward(width)
        i += 1

    t.right(90)

    j = 0
    while j <= width // step:
        jump_to(top_left_x + step * j, top_left_y)
        t.forward(height)
        j += 1

    t.penup()
    t.home()
    t.pencolor("black")
    t.pendown()
    t.tracer(True)


def grille(width=800, height=800):
    draw_custom_grid(width, height, 10, '#e0e0e0')
    draw_custom_grid(width, height, 100, '#cccccc')
